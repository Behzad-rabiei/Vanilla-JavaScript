//  Book Constructor
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


//  Magazine Constructor
function Magazine(name, author, year, month) {
  Book.call(this, name, author, year);
  this.month = month;
}




//  Inheritance Prototype
Magazine.prototype = Object.create(Book.prototype);

//  Instantiate Magazine Object
const mag = new Magazine('mag one', 'Behzad', '2019', 'July');

console.log(mag);
console.log(mag.getInfo());
