const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (e) => {
  ui.clear();
  let text = e.target.value;

  if (text) {
    profile._debounce(async () => {
      // perform the search
      try {
        profile
          .getProfile(text)
          .then((res) => {
            if (res.profile.name) {
              ui.showProfile(res.profile);
              ui.showTodoList(res.todo);
            } else {
              throw Error(text);
            }
          })
          .catch((err) => {
            ui.showAlert(err?.message);
          });
      } catch (error) {
        ui.showAlert(error?.message);
      }
    }, 500);
  }
});
