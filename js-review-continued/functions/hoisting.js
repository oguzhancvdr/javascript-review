/**
 * function and var declarations are hoisted
 * safer to access only after initialized
 */

display();
moreComplex();
console.log(display);
console.log(random);
// console.log(firstName);

const firstName = "jhon";
const lastName = "jordan";
var random = "random";

function display() {
  console.log("helo world");
}

function moreComplex() {
  console.log(`${firstName} ${lastName} ${random}`);
}
