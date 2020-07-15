const button = document.querySelector('#button');
button.addEventListener('click', getTextFile);

function getTextFile(event) {
  //  CREATE XHR OBJECT
  const xhr = new XMLHttpRequest();

  //  open  //  ARGUMENTS:  type, url/file name, async
  xhr.open('GET', 'sample.txt', true);

  // xhr.onload = getResponse;
  xhr.onload = requestOnload;
  //  send REQUEST
  xhr.send();

  //  onerror
  xhr.onerror = handleError;

  //  POTIONAL:  UESE FOR LOADERS
  xhr.onprogress = Handleprogress;
}

function requestOnload(res) {
  const container = document.querySelector('.container');
  const { status, responseText } = res.currentTarget;
  if (status === 200) {
    container.innerHTML = responseText;
  }
  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}

function handleError(err) {
  console.log('Request error ...');
}

function Handleprogress(res) {
  console.log(res);
}
