// const ul = document.querySelector('.items');

// ul.remove();
// ul.firstElementChild.remove();

// ul.firstElementChild.textContent = 'Behzad';
// ul.children[1].innerText = ':D';
// ul.lastElementChild.innerHTML = '<h4>Yes</h4>'

// const botton = document.querySelector('.btn');
// botton.style.background = 'blue';


// const button = document.querySelector('.btn');
// console.log(button);



// Use mouseout and mousein instead of click
// button.addEventListener('click', function (event) {
//   event.preventDefault(); //Needed
//   button.style.background = '#02f';

//   document.querySelector('.items').lastElementChild.innerHTML = '<h3>Hi :D</h3>';

//   document.querySelector('body').classList.add('bg-dark');

// });


const form = document.querySelector('#my-form');
const message = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('.items');

form.addEventListener('submit', onSubmit);


function onSubmit(event) {
  event.preventDefault();
  if (nameInput.value === '' || emailInput.value === '') {
    emptyError();
  }
  else {
    addUser();
  }
}


function emptyError() {
  message.classList.add('error');
  message.innerHTML = 'Please fill the form';
  setTimeout(() => message.remove(), 3000);
}

function addUser() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  userList.appendChild(li);
  nameInput.value = '';
  emailInput.value = '';
}
