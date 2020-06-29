// WE HAVE TWO WAYS FOR DELACER ARRAYS //
const myArray = new Array();
const cars = ['AMG GT', 'Bentley Mulsanne', 'Audi A7'];
const everyThings = [true, 20, 'name']; //	LOOK AT FREEDOM :D

console.log(cars);
console.log(cars[0]);
console.log(cars.indexOf('AMG GT'));
console.log(Array.isArray(cars));

cars.pop(); // DELETE THE LAST VALUE

cars.unshift(); //	ADD NEW VALUE TO THE START OF THE ARRAY
cars.push('CLS63'); // ADD NEW VALUE TO THE END OF THE ARRAY
