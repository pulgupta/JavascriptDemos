/**
 * In the below case we will not get error but we will get undefined.
 * The reason for this is due to hoisting, a behavior of JavaScript 
 * in which variable and function declarations are moved to the top of their scope. 
 */
console.log(x);
// Initialize x in the global scope
var x = 100;
console.log('log 1', x);

function hoist() {
  // A condition that should not affect the outcome of the code
  if (false) {
    var x = 200;
  }
  console.log('log 2', x); // This is undefied but how?
  /**
   * The reason is that a was hoisted at the top of the function resulting 
   * in undefined
   */
}

hoist();


/**
 * The same thing however fails with let and const
 * The next statement will fail and will stop the script
 * from processing further instructions
 */
//console.log('log 3', y);
let y = 100;
console.log('log 4', y);

