// LOCAL JSON
const userBotton = document.querySelector('#user-button');
const usersBotton = document.querySelector('#users-button');

userBotton.addEventListener('click', loadUser);
usersBotton.addEventListener('click', loadUsres);


function loadUser(event) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'user.json', true);
  xhr.onload = userOnload;
  xhr.send();
}
function userOnload(res) {
  const { status, responseText } = res.currentTarget;
  if (status === 200) {
    const user = JSON.parse(responseText);
    const userContainer = document.querySelector('.user-container');
    let output = '';
    output +=
      `<ul>
      <li>ID: ${user.id}</li>
      <li>Name: ${user.name}</li>
      <li>Email: ${user.email}</li>
      </ul>`;
    userContainer.innerHTML = output;
  }
}


function loadUsres(event) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);
  xhr.onload = usersOnload;
  xhr.send();
}
function usersOnload(res) {
  const { status, responseText } = res.currentTarget;
  if (status === 200) {
    const users = JSON.parse(responseText);
    const usersContainer = document.querySelector('.users-container');
    let output = '';
    users.forEach((user) => {
      output +=
        `<ul>
      <li>ID: ${user.id}</li>
      <li>Name: ${user.name}</li>
      <li>Email: ${user.email}</li>
      </ul>`;
    });
    usersContainer.innerHTML = output;
  }
}
