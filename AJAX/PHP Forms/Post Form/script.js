const form = document.querySelector('#post-form');

form.addEventListener('submit', postName);

function postName(event) {
  event.preventDefault();
  const name = document.querySelector('#name');
  const params = `name=${name.value}`
  const xhr = new XMLHttpRequest();
  xhr.open('Post', `process.php`, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onload = nameOnload;
  xhr.send(params);
}

function nameOnload(res) {
  const { status, responseText } = res.currentTarget;
  if (status === 200) {
    console.log(responseText);
  }
}
