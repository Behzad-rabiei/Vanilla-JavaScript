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

//  Magazine Subclass
class Magazine extends Book {
  constructor(name, author, year, month) {
    super(name, author, year);  //  CALL Book Constructor
    this.month = month;
  }
}

//  Instantiate Magazine Object
const mag = new Magazine('mag one', 'Mehran', '2017', 'july');
console.log(mag);
console.log(mag.getInfo());
console.log(Magazine.getBooksNumber());
