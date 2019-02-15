// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  let user = document.getElementById("username").value;
  req.addEventListener('load', showRepositories);
  req.open('GET', "https://api.github.com/users/" + user + "/repos");
  req.send;
}

function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
}
