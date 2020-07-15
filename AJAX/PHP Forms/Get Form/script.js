const form = document.querySelector('#get-form');

form.addEventListener('submit', getName);

function getName(event) {
  event.preventDefault();
  const name = document.querySelector('#name');
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `process.php?name=${name.value}`, true);
  xhr.onload = nameOnload;
  xhr.send();
}

function nameOnload(res) {
  const { status, responseText } = res.currentTarget;
  if (status === 200) {
    console.log(responseText);
  }
}
