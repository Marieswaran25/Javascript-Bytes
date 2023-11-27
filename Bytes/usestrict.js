function example() {
 x = 10; // ReferenceError: x is not defined
  console.log(x);
}

example();



console.log(this); // undefined
