//  Constructor
function Book(name, author, year) {
  this.name = name;
  this.author = author;
  this.year = year;
}

//  Prototype: getInfo
Book.prototype.getInfo = function () {
  return (
    `${this.name} was written by ${this.author} in ${this.year}`
  );
};

//  Prototype: getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return (
    `This book is written ${years} ago`
  );
}


//  Prototype: revise
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revise = true;
};




//  Instatiate AN Object
const book1 = new Book('book one', 'Behzad', '2018');
const book2 = new Book('book two', 'Mehran', '2019');

console.log(book1.getInfo());
console.log(book1);
book1.revise(2020);
console.log(book1);

console.log(book2);
console.log(book2.getAge());


