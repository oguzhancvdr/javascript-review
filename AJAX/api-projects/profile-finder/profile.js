class Profile {
  constructor() {
    this.clientId = "";
    this.clientSecret = "";
    this.timeoutId;
  }

  _debounce(callback, delay) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(callback, delay);
  }

  async getProfile(userID) {
    const url = `https://jsonplaceholder.typicode.com/users/${userID}`;
    const profileResponse = await fetch(url);
    const profile = await profileResponse.json();

    const todoUrl = `https://jsonplaceholder.typicode.com/users/${profile?.id}/todos`;
    const todoResponse = await fetch(todoUrl);
    const todo = await todoResponse.json();

    return { profile, todo };
  }
}
