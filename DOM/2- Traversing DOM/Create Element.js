const newDiv = document.createElement('div');
//  ADD CLASS
newDiv.className = 'd1';
//  ADD ID
newDiv.id = 'gr-d1';
//  ADD ATTRIBUTE
newDiv.setAttribute('title', 'hello world');
//  createTextNode
const newTextNode = document.createTextNode('this VanillaJS');
//  ADD newDivText TO newDiv
newDiv.appendChild(newTextNode);
console.log(newDiv);
//  ADD newDiv TO DOM
const container = document.querySelector('header .container');
const h1 = document.querySelector('header #header-title');
newDiv.style.fontSize = '25px';
newDiv.style.fontWeight = 'bold';
container.insertBefore(newDiv, h1);
