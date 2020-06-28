function hello(thing) {
    console.log(this + " says hello " + thing);
}

/**
 * What we have below is our basic primitive which js uses to call functions
 * Consider all the other syntax as sugar on top of this syntax 
 */
hello.call("John", "world");  

hello("world"); // -> This desugars to hello(window, "world") in case of browser based js and 
// to hello(global, "world") in node env
// to hello(undefined, "world") with strict mode on

class Person {
    greetings(text) {
        // Unlike Java where this will always refer to an instance of the class Person
        // In Js it will change based on the context of the call
        console.log(this, text);
    }
}
const person = new Person();
person.greetings("Hello")

const greetGlobal = person.greetings;
greetGlobal("hello")