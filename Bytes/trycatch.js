var a = 11;
var c = 10;
try {
  if (b) {
    console.log(a);
    if (c == 10) {
      try {
        if (a == 10 && c == 10) {
          throw "a is correct c is correct";
        } else {
          throw "a is incorrect c is correct";
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("Incorrect");
  }
  else if (error instanceof ReferenceError) {
    console.log("correct");
  }
}
