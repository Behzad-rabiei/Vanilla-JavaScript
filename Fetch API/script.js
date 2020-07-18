const getTextBtn = document.querySelector('#get-text-button');
const getJsonBtn = document.querySelector('#get-json-button');
const getApiBtn = document.querySelector('#get-api-button');
const from = document.querySelector('#post-form');

getTextBtn.addEventListener('click', getText);
getJsonBtn.addEventListener('click', getJson);
getApiBtn.addEventListener('click', getApi);
from.addEventListener('submit', postForm);


//  GET TEXT
function getText(event) {
  const path = 'sample.txt';
  getTextAsync(path)
    .then(data => textToHtml(data))
    .catch(error => console.error(error));
}

async function getTextAsync(path) {
  const response = await fetch(path);
  return await response.text();
}

function textToHtml(data) {
  const result = document.querySelector('.result');
  result.innerHTML = data;
}



//  GET JSON
function getJson(event) {
  const path = 'users.json';
  getJsonAsync(path)
    .then(data => jsonToHtml(data))
    .catch(error => console.error(error));
}

async function getJsonAsync(path) {
  const response = await fetch(path);
  return await response.json();
}

function jsonToHtml(users) {
  const result = document.querySelector('.result');
  let output = '<h2 class="mb-4">Users</h2>';
  users.forEach(user => {
    output +=
      `<ul class="list-group mb-3">
      <li class="list-groupt-item">ID: ${user.id}</li>
      <li class="list-groupt-item">Name: ${user.name}</li>
      <li class="list-groupt-item">Email: ${user.email}</li>
      </ul>`;
  });
  result.innerHTML = output;
}


//  GET API
function getApi(event) {
  const path = 'https://jsonplaceholder.typicode.com/posts';
  getJsonAsync(path)
    .then(data => apiToHtml(data))
    .catch(error => console.error(error));
}

function apiToHtml(posts) {
  const result = document.querySelector('.result');
  let output = '<h2 class="mb-4">Posts</h2>';
  posts.forEach(post => {
    output +=
      `<div class="card card-body mb-3 ">
      <h3>${post.title}</h3>
      <p>${post.body}</p>
      </div>`;
  });
  result.innerHTML = output;
}


//  POST FORM
function postForm(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const config = {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ title: title, body: body })
  };
  const path = 'https://jsonplaceholder.typicode.com/posts';
  postFormAsync(path, config)
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

async function postFormAsync(path, config) {
  const response = await fetch(path, config);
  return await response.json();
}
