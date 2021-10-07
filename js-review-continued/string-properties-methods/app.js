// String properties and methods
// wrapper String Object, don't memorize methods

let text = " Peter Jordan";

// lenght is one of the property of string
let result = text.length;
console.log(result);

// toeLowerCase is one of the method of string
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// index of each chars of string

console.log(text.charAt(0)); // empty string
console.log(text.charAt(1)); // P
console.log(text.charAt(12)); // n

// get last value of given string
// combination of methods and properties of string
console.log(text.charAt(text.length-1)); // n

// with indexOf
console.log(text.indexOf('p')); // -1 means that char is not there. case sensitive
console.log(text.indexOf('e')); // second index of string returns 2

// trim method
console.log(text);
console.log(text.trim());
console.log(text.startsWith('peter')); // return false, case sensitive matter
console.log(text.startsWith(' Peter'));

// first remove white spaces, second convert to lovercase and then look for peter
console.log(text.trim().toLowerCase().startsWith('peter')); // true

// includes
console.log(text.includes('eter')); // true

/**
 * slice method creates a new string from existing one
 *  by getting specific part of string
 */

console.log(text.slice(0,2));  
console.log(text.slice(-3));


// Template literals - ES6+
// Backtick ``
// Interpolation ${} - insert expression(value)

const myName = 'oguz';
const age = 28;
const sentence = "Hey It's " + myName + ' and he is ' + age + ' yeras old.';

// we can write how we want we dont need to use escapes
const value = `Hey it's ${myName} and 
he is ${age} years old`;

console.log(sentence);
console.log(value);


























// const person = {
//   name: "peter", // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);
// console.log(person.name);
// person.greeting();
