console.log("linked");

let profileDiv = document.querySelector("#profile");

fetch("https://api.github.com/users/hjoyheath", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let imageEl = document.createElement("img");
    imageEl.src = data.avatar_url;
    profileDiv.appendChild(imageEl);

    let nameDiv = document.createElement("p");
    nameDiv.classList.add("name");
    nameDiv.innerText = data.name;
    profileDiv.appendChild(nameDiv);

    let locationDiv = document.createElement("div");
    locationDiv.innerText = `Location: ${data.location}`;
    profileDiv.appendChild(locationDiv);

    let gitDiv = document.createElement("div");
    gitDiv.innerText = `Git Hub URL: ${data.html_url}`;
    profileDiv.appendChild(gitDiv);

    let usernameDiv = document.createElement("div");
    usernameDiv.innerText = `Git Hub Username: ${data.login}`;
    profileDiv.appendChild(usernameDiv);
  });
//   urlto get all my repos
// "https://api.github.com/users/hjoyheath/repos"
