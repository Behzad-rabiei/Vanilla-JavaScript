//  Constructor
function Book(name, author, year) { //  Constructor MUST START WITH UPPER CASE
  this.name = name;
  this.author = author;
  this.year = year;
  this.getInfo = function () {
    return (
      `${this.name} was written by ${this.author} in ${this.year}`  //  this REFERS TO OBJECT KEYS
    );
  }
}


//  Instatiate AN Object
const book1 = new Book('book one', 'Behzad', '2020');
const book2 = new Book('book two', 'Mehran', '2019');

//  getInfo IS IN ALL Book Objects BUT MAYBE WE DO NOT NEED IT FOR ALL Book Objects
//  USE prototype FOR FIX IT
console.log(book1);
console.log(book2);

