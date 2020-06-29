//	OBJECT	ORIENTED PROGRAMING //

//	ES5 //
// CONSTRUCTOR FUNCTION (NOTE: FIRST LETTER OF FUNCTION NAME MUST BE UPPERCASE)
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date();
  // this.getFullName = function(){
  // 	return `${this.firstName} ${this.lastName}`;
  // }
  // this.getBirthday = () => `${this.birthday}`;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}
Person.prototype.getBirthday = () => this.birthday;

//	INSTANTIATED OBJECT
const person1 = new Person('behzad', 'rabiei', '08-01-1999');

//	ES6 //
class Person {
  constructor(firstName, LastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
  }
  getBirthday() {
    return this.birthday;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
