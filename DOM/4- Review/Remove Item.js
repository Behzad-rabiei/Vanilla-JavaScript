const itemList = document.querySelector('#items');
const items = document.querySelectorAll('.list-group-item');
const deleteButtons = document.querySelectorAll('.delete');

console.log(deleteButtons);
deleteButtons.forEach(addClickListener);

function addClickListener(deleteButton) {
  deleteButton.addEventListener('click', removeItem)
}

function removeItem(evnet) {
  event.target.parentElement.remove();
}

//  ANOTHER WAY
itemList.addEventListener('click', removeItems);

function removeItems(event) {
  if (event.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      itemList.removeChild(event.target.parentElement);

    }
  }
}
