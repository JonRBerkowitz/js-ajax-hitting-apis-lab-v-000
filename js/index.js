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
  const repoList = `${repos.map(r => '<li>' +
  r.name + '- <a href="#" data-repo="' +
  r.name + '" data-user="' + r.owner.login +
  '" onclick="getCommits(this)">Get Commits</a></li>').join('')}`;
  document.getElementById('repositories').innerHTML = repoList;
}

function getCommits(e) {
  const name = e.dataset.repo;
  const user = e.dataset.user;
  const req = new XMLHttpRequest();
  req.addEventListener('load', displayCommits);
  req.open('GET', "https://api.github.com/repos/" + user + "/" + name + "/commits");
  req.send();
}

function displayCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><h3>' +
        commit.commit.author.name +
        ' (' +
        commit.author.login +
        ')</h3>' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}

function getBranches(el) {
  const repoName = el.dataset.repository;
  const uri =
    rootURL + '/repos/' + el.dataset.username + '/' + repoName + '/branches';
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', displayBranches);
  xhr.open('GET', uri);
  xhr.send();
}
function displayBranches() {
  const branches = JSON.parse(this.responseText);
  const branchesList = `<ul>${branches
    .map(branch => '<li>' + branch.name + '</li>')
    .join('')}</ul>`;
  document.getElementById('details').innerHTML = branchesList;
}