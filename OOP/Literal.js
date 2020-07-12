const book1 = {
  name: 'book one',
  author: 'Behzad',
  year: '2020',
  getInfo: function () {
    return (
      `${this.name} was written by ${this.author} in ${this.year}`  //  this REFERS TO OBJECT KEYS
    );
  }
};

console.log(Object.values(book1));
console.log(Object.keys(book1));
console.log(book1.getInfo());


const book2 = {
  name: 'book two',
  author: 'Mehran',
  year: '2019',
  getInfo: function () {
    return (
      `${this.name} was written by ${this.author} in ${this.year}`
    );
  }
};

console.log(book2.getInfo());


//  IF I WANT TO ADD 1000 BOOKS SO THIS IS RIGHT WAY ?!
//  WE HAVE Constructor :D
