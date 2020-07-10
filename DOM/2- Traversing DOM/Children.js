const listItems = document.querySelector('#items');
console.log(listItems);

//  childNodes
//  IT IS NODE LIST
console.log(listItems.childNodes); // childNoeds ASSUME LINE BREAKS AS CHILDREDN
//  listItems.childNodes[0].style.color = 'brown'; CUASE ERROR
listItems.childNodes[7].style.color = 'brown';


//  children
//  children HAS NOT PROBLEM OF childNodes
//  IT IS HTML COLLECTION
console.log(listItems.children);
listItems.children[0].style.color = 'red';

//  firstChild & firstElementChild
console.log(listItems.firstChild);  //  firstChild ASSUME LINE BREAKS AS CHILDREDN
console.log(listItems.firstElementChild);

//  lastChild & lastElementChild
console.log(listItems.lastChild); //  lastChild ASSUME LINE BREAKS AS CHILDREDN
console.log(listItems.lastElementChild);
