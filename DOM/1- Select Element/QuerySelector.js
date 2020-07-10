//  QUERYSELECTOR  //
const mainHeader = document.querySelector('#main-header');
mainHeader.style.borderBottom = '2px solid brown';

const input = document.querySelector('input');
input.value = 'Enter Mail';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'Send';

const item = document.querySelector('.list-group-item');
item.textContent = 'this is 1';

const lastItem = document.querySelector('.list-group-item:last-child');
lastItem.textContent = 'this is last';

const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.textContent = 'this is 2';


//  QUERYSELECTORALL  //
const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Heloo';

const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');

//  WITH QUREYSELECTORALL WE HAVE NODE LIST THAT MEAN WE CAN UES ARRAY METHODS
odd.forEach(function (item) {
  item.style.backgroundColor = 'brown';
});

even.forEach(function (item) {
  item.style.backgroundColor = 'blue';
});
