const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];
/**
 * Important: Do not just assume that callbacks are always async
 * ForEach also takes a callback but is always synchronous.
 * Hence we cannot say that if something is using callback that it will necessary be 
 * a async function
 */
function getPosts() {
  let output = "";
  setTimeout(() => {
    // This is also a callback
    posts.forEach((post) => {
      // Backtick format for template notation
      output += `<li>${post.title}</li>`; 
    });
    document.body.innerHTML = output;
  }, 1); // Miliseconds
}

function savePost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    /**
     * One way to return back the data is to pass that data back into the
     * callback function. In this case we can use that data in our caller.
     */
    callback(posts[2]);
  }, 2000);
}

savePost({ title: "Post three", body: "This is post three" }, (postsReturned) => {
  console.log(postsReturned);
  getPosts();
});
