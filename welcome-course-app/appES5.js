const form = document.getElementById("new-course");
const courseList = document.getElementById("course-list");

// constructor
function Course(title, instructor, image) {
  this.title = title;
  this.instructor = instructor;
  this.image = image;
}

// UI constructor
function UI() {}
UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  var html = `
    <tr>
      <td> <img src="assets/images/${course.image}" /> </td>
      <td> ${course.title} </td>
      <td> ${course.instructor} </td>
      <td> <a href="#" class="btn btn-danger btn-sm delete"> Delete </a> </td>
    </tr>
  `;

  list.innerHTML += html;
};

UI.prototype.clearControls = function () {
  document.getElementById("title").value = "";
  document.getElementById("instructor").value = "";
  document.getElementById("image").value = "";
};

UI.prototype.deleteCourse = function (element) {
  if (element.classList.contains("delete")) {
    element.parentElement.parentElement.remove();
  }
};

UI.prototype.showAlert = function (msg, className) {
  var alert = ` <div class="alert alert-${className}"> ${msg} </div> `;
  const row = document.querySelector('.row');
  // params => beforeBegin, afterBegin, beforeEnd, afterEnd
  row.insertAdjacentHTML("beforeBegin", alert);

  setTimeout(()=>{
    document.querySelector('.alert').remove();
  }, 3000)
};

// event handlers
function onSubmit(e) {
  const titleValue = document.getElementById("title").value;
  const instructorValue = document.getElementById("instructor").value;
  const imageValue = document.getElementById("image").value;

  // create course object
  const course = new Course(titleValue, instructorValue, imageValue);

  // create ui object
  const ui = new UI();
  if (titleValue === "" || instructorValue === "" || imageValue === "") {
    ui.showAlert("Please fill all fields", "warning");
  } else {
    // add course to list
    ui.addCourseToList(course);

    // clear controls
    ui.clearControls();

    ui.showAlert("The course has been created", "success");
  }

  e.preventDefault();
}

function onDelete(e) {
  const ui = new UI();
  ui.deleteCourse(e.target);
  ui.showAlert("This course has been deleted", "danger");
}

form.addEventListener("submit", onSubmit);
courseList.addEventListener("click", onDelete);
