const posts = [
  { title: 'post one', body: 'post one body' },
  { title: 'post two', body: 'post two body' }
];

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      }
      else {
        reject('Error...');
      }
    }, 2000);
  })

}

createPost({ title: 'post three', body: 'post three body' })
  .then(getPosts)
  .catch(function (error) {
    console.log(error);
  });


//  Promise.all
const promise1 = Promise.resolve('HI');
const promise2 = 10;
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 2000, 'Goodbye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (result) {
    return result.json();
  })

Promise.all([promise1, promise2, promise3, promise4]) //  Promise.all WAIT FOR ALL PROMISES AND THEN TRIGGER

  .then(function (values) {
    console.log(values)
  });
