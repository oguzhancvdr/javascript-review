const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (e) => {
  ui.clear();
  let text = e.target.value;
  if (text) {
    profile.getProfile(text)
    .then((res) => {
      if (res.profile.length > 0) {
        ui.showProfile(res.profile[0]);
        ui.showTodoList(res.todo);
      } else {
        ui.showAlert(text);
      }
    })
    .catch(() => ui.showAlert(text))
  }
});
