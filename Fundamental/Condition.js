const x = 10;
if (x === 10) {
  console.log('x is 10 ===');
}

if (x == 10) {
  console.log('x is 10 ==');
}


const y = '10';
// TRIPLE EQUALS MEANS THAT 2 VALUES MUST BE SAME DATA TYPES BYT DOUBLE EQUALS DOES NOT ATTENTION TO THE DATA TYPES
if (y === 10) {
  console.log('y is 10 ===');
}

if (y == 10) {
  console.log('y is 10 ==');
}

const flag = true;
const color = flag === true ? 'red' : 'blue';
console.log(color);

switch (color) {
  case 'red': {
    console.log('color is red');
    break;
  }
  case 'blue': {
    console.log('color is blue');
    break;
  }
  default: {
    console.log('color is not red or blue');
    break;
  }
}
