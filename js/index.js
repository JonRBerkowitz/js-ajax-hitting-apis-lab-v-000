// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  let user = document.getElementById("username").value;
  req.open('GET', "https://api.github.com/users/" + user + "/repos");
  req.send;
}
