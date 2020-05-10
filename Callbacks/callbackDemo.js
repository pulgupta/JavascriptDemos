const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  let output = "";
  setTimeout(() => {
    // This is also a callback
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`; // Backtick format for template notation
    });
    document.body.innerHTML = output;
  }, 1); // Miliseconds
}

function savePost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

savePost({ title: "Post three", body: "This is post three" }, getPosts);
