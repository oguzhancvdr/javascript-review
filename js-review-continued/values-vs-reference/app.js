// Values vs reference
// Primitive Data types
// String, Number, Symbol, Boolean, Undefined, Null
// Arrays, Functions, Objects = objects
// typeof

// when assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value

// when assigning non-primitive data type value to a variable is done by reference so any changes will affect the references

const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first number is ${number}`);
console.log(`the second number is ${number2}`);

let person = {name: 'bob'};
// above we get copy of person not reference of person, thus person object will not be affected when person2.name is changed
// if we make person2 equals person, it means we get reference of person
// so our changes on person2.name will affect both person and person2
let person2 = {...person};
person2.name = 'susy'
console.log(`the first name is ${person.name}`);
console.log(`the second name is ${person2.name}`);

// Null amd Undefined
// both represent 'no value'

// undefined - "js can not find value for this"

// variable without value
// missing function arguments
// missing object properties

// null - developers sets the value

let _number = 20 + null; // 20 + 0;
console.log(_number);
let _number2 = 20 + undefined; // 20 +0;
console.log(_number2);
