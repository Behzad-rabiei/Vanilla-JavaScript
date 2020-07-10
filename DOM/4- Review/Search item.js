const searchBar = document.querySelector('#search-bar');
searchBar.addEventListener('keyup', searchItems);

function searchItems(event) {
  const input = event.target.value.toLowerCase();
  const items = document.querySelectorAll('.list-group-item');
  items.forEach(function (item) {

    //  GET li TEXT
    const itemName = item.firstChild.textContent;

    if (itemName.toLowerCase().indexOf(input) != -1) {
      item.style.display = 'block';
    }
    else {
      item.style.display = 'none';
    }
  });

}
