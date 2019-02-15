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
  console.log(repos[1].owner.login);

}

function getCommits(e) {
  const name = e.dataset.repo;
  const user = e.dataset.user;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', "https://api.github.com/repos/" + user + "/" + name + "/commits");
  req.send();
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;
}
