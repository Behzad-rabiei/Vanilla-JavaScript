//  GETELEMENTBYID //
console.log(document.getElementById('header-title'));
const headerTitle = document.getElementById('header-title');
headerTitle.textContent = 'Hi';
headerTitle.innerText = 'Bye';
//  WHAT IS THE DIFRENCE BETWEEN INNERTEXT & TEXTCONTETN?  //
//  INNERTEXT PAY ATTENTION TO THE SYTLE, FOREXAMPLE IF IN HEADER WE USE SPAN AND PUT IN IT 123 AND STYLE SPAN : DISPLAY:NONE
console.log(headerTitle.textContent); // item lister 123
console.log(headerTitle.innerText); // item lister
//  INNERHTML DID NOT CHANGE THE HTML, JUST PUT HTML INSIDE ANOTHER HTML
//  IN EXAMPLE BELOW H3 PUT IN H1 TAG
headerTitle.innerHTML = '<h3>ops</h3>';
headerTitle.style.borderBottom = '2px solid blue';

//  GETELEMENTSBYCLASSNAME //
const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'It \'s two';
items[1].style.backgroundColor = 'blue';
items[1].style.color = 'white';
//  items.style.backgroundColor = 'gray'; // CAN NOT DO THAT BECAUSE IT IS ARRAY
for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'gray';
}

//  GETELEMENTSBYATGNAME  //
const li = document.getElementsByTagName('li');
console.log(li);
li[1].textContent = 'It \'s two';
li[1].style.backgroundColor = 'blue';
li[1].style.color = 'white';
//  li.style.backgroundColor = 'gray'; //  CAN NOT DO THAT BECAUSE IT IS ARRAY
for (let i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = 'gray';
}



