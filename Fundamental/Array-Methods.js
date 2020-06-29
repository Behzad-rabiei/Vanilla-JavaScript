// FOREACH: LOOP THROUGHT ARRAY
todos.forEach(function (todo) {
  console.log(todo.content)
});

// MAP: ALLOW TO CREATE NEW ARRAY FROM ARRAY
const todoContetns = todos.map(function (todo) {
  return todo.content;
});
console.log(todoContetns);

// FILTER: CREATE NEW ARRAY BASE ON CONDITION
const todoCompleted = todos.filter(function (todo) {
  return todo.iscomplete === true;
})
  .map(function (todo) {
    return todo.content;
  });
