const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  let output = "";
  setTimeout(() => {
    /**
     * This is nothing but the callback which timeout takes.
     * Callback is nothing but a method parameter which is actually a function which the accepting
     * method executed.
     */
    posts.forEach((post) => {
      // Backtick format for template notation
      output += `<li>${post.title}</li>`; 
    });
    document.body.innerHTML = output;
  }, 1); // This should work instantaniously
}

function savePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        // In this way we can return anything from the promise
        resolve({ text: "Lets show your posts" }); 
      } else {
        reject("Error details of save");
      }
    }, 1000);
  });
}

function updatePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts[2].title = "Post three - updated";
      const error = false;
      if (!error) {
        // In this way we can return anything from the promise
        resolve({ text: "Lets show your posts" }); 
      } else {
        reject("Error details of update");
      }
    }, 1000);
  });
}

/**
 * I have also demonstrated below the promise chaining
 * In case of callbacks we can easily make the code too complex 
 * as callbacks will result in nexted structure.
 * However with callbacks we are sorted as we can chain them rather than using nesting
 * 
 * INFERENCE: .catch works like the try-catch statement, which means you only need one catch at the end
 * 
 */
savePost({ title: "Post three", body: "This is post three" })
  // The below line also returns a promise so we can easily chain them
  .then(() => updatePost()) 
  .then(getPosts)
  .catch((errorData) => {
    // Another method refernce to handle the error
    console.log("Some error occoured", errorData); 
  });

  /**
   * In case our promise are mutually exclusive then we can listen for all of
   * them in a single call using promise.all().then
   */
