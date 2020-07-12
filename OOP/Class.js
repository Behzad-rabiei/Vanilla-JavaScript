class Book {
  constructor(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
  }
  getInfo() {
    return (
      `${this.name} was written by ${this.author} in ${this.year}`
    );
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return (
      `This book is written ${years} ago`
    );
  }

  revise(newYear) {
    this.year = newYear;
    this.revise = true;
  }

  static getBooksNumber() {
    return 100;
  }
}

//  Instantiate Book Object
const book = new Book('book one', 'Behzad', '2018');
console.log(book);
// console.log(book.getBooksNumber());  //  CAUSED ERROR BECAUSE static method DOES NOT BELONG TO AN OBJECT
console.log(Book.getBooksNumber());  //  static method IS CLASS PROPERTY

