const person = {
  firstName: 'Joe',
  lastName: 'Doe',
  age: 21,
  address: {
    street: "'0 main st',
			city: 'Boston',
    state: 'MA',
  },
  skills =['Frontend', 'UX & UI']
};

console.log(perosn);
console.log(person.skills[0])
console.log(firstName, lastName);

person.email = "Joe@yahoo.com"; //	ADD PROPERTY
console.log(perosn);

const { firstName, lastName, address: { city } } = person;
console.log(city);
