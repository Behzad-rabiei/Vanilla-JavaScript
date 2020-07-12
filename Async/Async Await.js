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
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}

//  Async  // Awiat
async function init() {
  await createPost({ title: 'post three', body: 'post three body' });
  getPosts();
}
init();

// Async  //  Awiat  //  Fetch
async function fetchData() {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await result.json();
  console.log(data);
}
fetchData();
