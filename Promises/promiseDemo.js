const posts = [
  { title: "Post one", body: "This is post one" },
  { title: "Post two", body: "This is post two" },
];

function getPosts() {
  let output = "";
  setTimeout(() => {
    // This is nothing but the callback which timeout takes.
    // Callback is nothing but a method parameter which is actually a function which the accepting
    // method executed.
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
        reject("Error details");
      }
    }, 2000);
  });
}

savePost({ title: "Post three", body: "This is post three" })
  .then((data) => {
    // Using the data which we returned from the promise
    console.log(data.text); 
    getPosts();
  })
  .catch((errorData) => {
    // Another method refernce to handle the error
    console.log("Some error occoured", errorData); 
  });
