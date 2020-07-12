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

getPosts();

function createPost(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}

createPost({ title: 'post three', body: 'post three body' });

//  SO WE ADDED POST THREE BUT IT IS NOT SHOW IN THML PAGE
//  callback

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
// getPosts();

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}
createPost({ title: 'post three', body: 'post three body' }, getPosts);

