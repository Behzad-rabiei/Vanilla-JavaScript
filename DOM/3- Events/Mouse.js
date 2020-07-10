const button = document.querySelector('#button');
const box = document.querySelector('#box');
const output = document.querySelector('#output');
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent);
button.addEventListener('mouseup', runEvent);
button.addEventListener('mousedown', runEvent);

//  mouseeneter JUST FIRE FOR PARENT ELEMENT
box.addEventListener('mouseenter', runEvent);

//  mouseleave IS SAME AS mousenter
box.addEventListener('mouseleave', runEvent);

//  mouseover ALSO FIRE FOR INNER ELEMENT
box.addEventListener('mouseover', runEvent);

//  mouseout IS SAME AS mouseover
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', getMousePosition);



function runEvent(event) {
  console.log(`Event Type: ${event.type}`);
}

function getMousePosition(event) {
  runEvent(event);
  output.innerHTML = '<h3>MouseX:' + event.offsetX + '</h3> <h3>MouseY:' + event.offsetY + '</h3>';
  box.style.backgroundColor = "rgb(" + event.offsetX + "," + event.offsetY + ",40)";
}
