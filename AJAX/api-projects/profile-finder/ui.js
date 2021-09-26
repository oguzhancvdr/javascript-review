class UI {
  constructor() {
    this.profileContainer = document.querySelector("#profileContainer");
    this.alert = document.querySelector("#alert");
  }

  showProfile(profile) {
    this.profileContainer.innerHTML = `
    <div class="card card-body">
      <div class="row"> 
        <div class="col-md-3">       
          <a href="https://placeholder.com"><img class="img-thumbnail" src="https://via.placeholder.com/150"></a>
        </div>
        <div class="col-md-9">
          <h4>Contact</h4>
          <ul class="list-group">
            <li class="list-group-item">Username: ${profile.username}</li>
            <li class="list-group-item">Name: ${profile.name}</li>
            <li class="list-group-item">Email: ${profile.email}</li>
            <li class="list-group-item">Phone: ${profile.phone}</li>
            <li class="list-group-item">Address: ${profile.address.street}, ${profile.address.suite}, ${profile.address.city}-${profile.address.zipcode} </li>
            <li class="list-group-item">Website: ${profile.website}</li>
            <li class="list-group-item">Company: ${profile.company.name}</li>
          </ul>
          <h4 class="mb-2 mt-2">Todo List</h4>
           <ul class="list-group" id="todo"></ul>          
        </div>  
      </div>   
    </div>   
    `;
  }

  showAlert(text) {
    this.alert.style.display = "block";
    this.alert.innerHTML = `${text} is not found.`;
  }

  showTodoList(todo) {
    let html = "";
    todo.forEach((elem) => {
      if (elem.completed) {
        html += `
        <li class="list-group-item bg-success">${elem.title}</li>
        `;
      } else {
        html += `
         <li class="list-group-item bg-info">${elem.title}</li>
        `;
      }
    });
    this.profileContainer.querySelector("#todo").innerHTML = html;
  }

  clear() {
    this.profileContainer.innerHTML = "";
    this.alert.innerHTML = "";
    this.alert.style.display = "none";
  }
}
