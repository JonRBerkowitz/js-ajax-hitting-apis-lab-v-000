// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  let user = document.getElementById("username").value;
  console.log("https://api.github.com/users/" + user + "/repos");

}
