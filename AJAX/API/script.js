const button = document.querySelector('#button');
button.addEventListener('click', loadUsers);


function loadUsers(event) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.github.com/users', true);
  xhr.onload = usersOnload;
  xhr.send();
}

function usersOnload(res) {
  const { status, responseText } = res.currentTarget;
  if (status === 200) {
    const users = JSON.parse(responseText);
    const container = document.querySelector('.container');
    let output = '';
    users.forEach((user) => {
      output +=
        `<div class="user">
        <img src="${user.avatar_url}" width="70" height="70"/>
        <ul>
        <li>ID: ${user.id}</li>
        <li>Loggin: ${user.login}</li>
        </ul>
        </div>`
    });
    container.innerHTML = output;

  }
}
