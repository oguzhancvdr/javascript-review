const getOneBtn = document.querySelector("#getOne");
const getAllBtn = document.querySelector("#getAll");
const results = document.querySelector("#results");
const loading = document.querySelector("#loading");
const postInput = document.querySelector("#postInput");
const postDataBtn = document.querySelector("#postData");

function getOne() {
  const id = postInput.value;
  loading.style.display = "block";
  const url = `https://jsonplaceholder.typicode.com/posts/${id ? id : 1}`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    loading.style.display = "none";
    if (this.status === 200) {
      const post = JSON.parse(this.responseText);
      let html = "";
      html += `
        <div class="card mb-2" key="${post.id}">
        <div class="card-header">
         ${post.id}-${post.title}
         </div>
         <div class="card-body">
         <blockquote class="blockquote mb-0">
         <p>${post.body}</p>
         </blockquote>
         </div>
         </div>     
         `;
      results.innerHTML = html;
    }
  };
  xhr.send();
}

function getAll() {
  loading.style.display = "block";
  const url = "https://jsonplaceholder.typicode.com/posts";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      loading.style.display = "none";
      const posts = JSON.parse(this.responseText);
      let html = "";
      posts.forEach((post) => {
        html += `
        <div class="card mb-2" key="${post.id}">
        <div class="card-header">
         ${post.id}-${post.title}
         </div>
         <div class="card-body">
         <blockquote class="blockquote mb-0">
         <p>${post.body}</p>
         </blockquote>
         </div>
         </div>     
         `;
      });
      results.innerHTML = html;
    }
  };
  xhr.send();
}

function postData() {
  loading.style.display = "block";
  const data = {
    userId: 1,
    title: "new title",
    body: "new body",
  };
  const json = JSON.stringify(data);
  const url = "https://jsonplaceholder.typicode.com/posts";
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    loading.style.display = "none";
    if (xhr.status === 201 && xhr.readyState === 4) {
      const post = xhr.responseText;
      console.log(post);
    }
  };
  xhr.send(json);
}

getOneBtn.addEventListener("click", getOne);
getAllBtn.addEventListener("click", getAll);
postDataBtn.addEventListener("click", postData);
