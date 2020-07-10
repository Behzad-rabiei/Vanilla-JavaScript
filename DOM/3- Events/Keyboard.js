const itemInput = document.querySelector('input[type="text"]');
const form = document.querySelector('form');
const select = document.querySelector('select')
itemInput.addEventListener('keyup', getKeyboard);
itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keypress', runEvent);

//  IF CLICK IN INPUT BOX focus FIRE
//  IF EXIST POINTER FROM FORM blur FIRE
itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('paste', runEvent);
itemInput.addEventListener('cut', runEvent);

itemInput.addEventListener('input', runEvent);

select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', submitForm);

function runEvent(event) {
  console.log(`Event Type: ${event.type}`);
}

function getKeyboard(event) {
  runEvent(event);
  console.log(event.target.value);
}

function submitForm(event) {
  event.preventDefault();
  runEvent(event);
  console.log(event.target.value);
}
