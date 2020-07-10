const button = document.querySelector('#button').addEventListener('click', onClickButton);
function onClickButton(event) {
  document.querySelector('#main-header').innerHTML = '<h3>' + event.target.id + '</h3>';
  console.log(event.type);

  // MOUSE POSITION //
  // IN ELEMENT
  console.log(event.offsetX);
  console.log(event.offsetY);

  // IN BROWER
  console.log(event.clientX);
  console.log(event.clientY);

  // KEYBOARD
  console.log(event.shiftKey);
  console.log(event.altKey);
  console.log(event.ctrlKey);
  console.log(event);
}


