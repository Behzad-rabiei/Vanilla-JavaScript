const button = document.querySelector('#button');
button.addEventListener('click', getTextFile);

function getTextFile(event) {
  //  CREATE XHR OBJECT
  const xhr = new XMLHttpRequest();

  //  open  //  ARGUMENTS:  type, url/file name, async
  xhr.open('GET', 'sample.txt', true);

  //  onreadystatechange
  //  onload AND onreadystatechange ARE TWO WAY FOR GETING RESPONSE
  //  onload: FIRE WHEN readystate equals 4
  xhr.onreadystatechange = requestOnload;  //  send REQUEST
  xhr.send();

  //  onerror
  xhr.onerror = handleError;

  //  POTIONAL:  UESE FOR LOADERS
  xhr.onprogress = Handleprogress;
}

function requestOnload(res) {
  const container = document.querySelector('.container');
  const { status, responseText, readyState } = res.currentTarget;
  if (readyState === 4 && status === 200) {
    container.innerHTML = responseText;

  }
  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready
}

function handleError(err) {
  console.log('Request error ...');
}

function Handleprogress(res) {
  console.log(res);
}
