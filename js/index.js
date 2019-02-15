// your code here
function getRepositories() {
  const req = new XMLHttpRequest();
  let user = document.getElementById("username").value;
  req.addEventListener('load', showRepositories);
  req.open('GET', "https://api.github.com/users/" + user + "/repos");
  req.send();
}

function showRepositories() {
  var repos = JSON.parse(this.responseText);
  const repoList = `${repos.map(r => '<li>' + r.name + '- <a href="#" data-repo=""' + r.name  '" onclick="getCommits(this)">Get Commits</li>').join('')}`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits() {
  
}
