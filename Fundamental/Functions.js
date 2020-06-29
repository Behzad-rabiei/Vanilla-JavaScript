function addNum(num1, num2) {
  return num1 + num2;
}

//	addNum() //NAN: NOT A NUMBER, MEANS THAT WE EXPECT A NUMBER BUT IT IS NOT A NUMBER
function funDefualt(num1 = 5, num2 = 10) {
  return num1 + num2;
}

//	ARROW FUNCTION
//	1- INSTEAD OF FUNCTION KEYWORD WE USE VARIALBE
//	2- BEFORE PARAMETERS TYPE: =
//	3- AFTER  PARAMETERS TYPE: =>

const myArrow = (num1, num2) => {
  return num1 + num2;
}

//	OR

const shorter = (num1, num2) => num1 + num2;

const contents = todos.map((todo) => todo.content);
//	OR
const contents = todos.map(function (todo) {
  return todo.content;
})
