const form = document.getElementById("new-course");
const courseList = document.getElementById("course-list");

class Course {
  constructor(title, instructor, image) {
    this.courseId = Math.floor(Math.random() * 1000000);
    this.title = title;
    this.instructor = instructor;
    this.image = image;
  }
}

class UI {
  addCourseToList(course) {
    const list = document.getElementById("course-list");
    var html = `
      <tr>
        <td> <img src="assets/images/${course.image}" /> </td>
        <td> ${course.title} </td>
        <td> ${course.instructor} </td>
        <td> <a href="#" data-id="${course.courseId}" class="btn btn-danger btn-sm delete"> Delete </a> </td>
      </tr>
    `;

    list.innerHTML += html;
  }

  clearControls() {
    document.getElementById("title").value = "";
    document.getElementById("instructor").value = "";
    document.getElementById("image").value = "";
  }

  deleteCourse(element) {
    if (element.classList.contains("delete")) {
      element.parentElement.parentElement.remove();
      return true;
    }
  }

  showAlert(msg, className) {
    var alert = ` <div class="alert alert-${className}"> ${msg} </div> `;
    const row = document.querySelector(".row");
    // params => beforeBegin, afterBegin, beforeEnd, afterEnd
    row.insertAdjacentHTML("beforeBegin", alert);

    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}

class Storage {
  static getCourses() {
    let courses;
    if (localStorage.getItem("courses") === null) {
      courses = [];
    } else {
      courses = JSON.parse(localStorage.getItem("courses"));
    }
    return courses;
  }

  static displayCourses() {
    const courses = Storage.getCourses();

    courses.forEach((course) => {
      const ui = new UI();
      ui.addCourseToList(course);
    });
  }

  static addCourse(course) {
    const courses = Storage.getCourses();
    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
  }

  static deleteCourse(elem) {
    if (elem.classList.contains("delete")) {
      const id = elem.getAttribute("data-id");
      const courses = Storage.getCourses();

      courses.forEach((course, index) => {
        if (course.courseId == id) {
          courses.splice(index, 1);
        }
      });

      localStorage.setItem("courses", JSON.stringify(courses));
    }
  }
}

// event handlers
document.addEventListener("DOMContentLoaded", Storage.displayCourses);

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

    // save to localstorage
    Storage.addCourse(course);

    // clear controls
    ui.clearControls();

    ui.showAlert("The course has been created", "success");
  }

  e.preventDefault();
}

function onDelete(e) {
  const ui = new UI();

  if (ui.deleteCourse(e.target) === true) {
    // delete from localstorage
    Storage.deleteCourse(e.target);

    ui.showAlert("This course has been deleted", "danger");
  }
}

form.addEventListener("submit", onSubmit);
courseList.addEventListener("click", onDelete);
