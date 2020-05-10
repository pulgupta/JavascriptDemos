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
      output += `<li>${post.title}</li>`; // Backtick format for template notation
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
        resolve({ text: "Lets show your posts" }); // In this way we can return anything from the promise
      } else {
        reject("Error details");
      }
    }, 2000);
  });
}

savePost({ title: "Post three", body: "This is post three" })
  .then((data) => {
    console.log(data.text); // Using the data which we returned from the promise
    getPosts();
  })
  .catch((errorData) => {
    console.log("Some error occoured", errorData); // Another method refernce to handle the error
  });
