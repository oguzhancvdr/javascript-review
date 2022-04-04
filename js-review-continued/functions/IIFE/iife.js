/**
 * IIFE Immediately-Invoked Function Expression
 * older approach - new Modules
 * simple approach to avoid global scope pollution
 * good way at protecting the scope of your function and the variables within it
 * global namespace, extra steps
 */

const num1 = 30;
const num2 = 40;
// const num1 = 70;

function add() {
  return `result: ${num1 + num2}`;
}

console.log(add());

(function () {
  const num3 = 30;
  const num4 = 40;
  console.log(`result IIFE: ${num3 + num4}`);
})();

// pass arguments
(function (num4, num5) {
  console.log(`result IIFE: ${num4 + num5}`);
})(30, 49);

// return/assign to variable

const res = (function (num4, num5) {
  console.log(`result IIFE: ${num4 + num5}`);
  return num4 + num5;
})(100, 230);

console.log("res :>> ", res);

// console.log('object :>> ', num3);
