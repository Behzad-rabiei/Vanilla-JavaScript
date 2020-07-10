const addItemForm = document.querySelector('#addForm');
const itemList = document.querySelector('#items');

//  FORM SUBMIT EVENT
addItemForm.addEventListener('submit', addItem);

function addItem(event) {
  event.preventDefault();

  //  GET INPUT
  const item = document.querySelector('#item');

  //  CREATE NEW li ELEMENT
  const li = document.createElement('li');
  // ADD CLASS
  li.className = 'list-group-item';

  //  ADD text node WITH INPUT VALUE
  li.appendChild(document.createTextNode(item.value));


  //  CREATE deleteButton
  const deleteButton = document.createElement('button');
  deleteButton.className = 'btn btn-danger btn-sm float-right delete';
  deleteButton.appendChild(document.createTextNode('X'));

  //  APPEND deleteButton TO li
  li.appendChild(deleteButton);

  //  APPEND li TO itemList
  itemList.appendChild(li);
}
