console.log("linked");

let profileDiv = document.querySelector("#profile");
let repo = document.querySelector("#repo");

fetch("https://api.github.com/users/hjoyheath", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })
  //   avatar
  .then(function (data) {
    console.log(data);
    let imageEl = document.createElement("img");
    imageEl.src = data.avatar_url;
    profileDiv.appendChild(imageEl);
    imageEl.classList.add("img");
    // name
    let nameDiv = document.createElement("p");
    nameDiv.classList.add("name");
    nameDiv.innerText = data.name;
    profileDiv.appendChild(nameDiv);
    // location
    let locationDiv = document.createElement("div");
    locationDiv.innerText = `Location: ${data.location}`;
    profileDiv.appendChild(locationDiv);

    // gitHub url
    let urlDiv = document.createElement("a");
    urlDiv.href = `${data.html_url}`;
    urlDiv.innerText = `${data.login}`;
    profileDiv.appendChild(urlDiv);
    // username
    let usernameDiv = document.createElement("div");
    usernameDiv.innerText = `Username: ${data.login}`;
    profileDiv.appendChild(usernameDiv);
  });

//   urlto get all my repos
fetch("https://api.github.com/users/hjoyheath/repos", {
  method: "GET",
  headers: {},
})
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    for (let i of data) {
      let repoDiv = document.createElement("div");
      repoDiv.innerHTML = `<a href="${i.html_url}">'${i.name}</a>`;
      profileDiv.appendChild(repoDiv);
    }
  });
