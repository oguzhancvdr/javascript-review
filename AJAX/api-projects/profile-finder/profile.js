class Profile {
  constructor() {
    this.clientId = "";
    this.clientSecret = "";
  }

  async getProfile(username) {
    const url = `https://jsonplaceholder.typicode.com/users?username=${username}`;   
    const profileResponse = await fetch(url);
    const profile = await profileResponse.json();

    const todoUrl = `https://jsonplaceholder.typicode.com/todos/?userId=${profile?.[0]?.id}`;
    const todoResponse = await fetch(todoUrl);
    const todo = await todoResponse.json();

    return { profile, todo };
  }
}
