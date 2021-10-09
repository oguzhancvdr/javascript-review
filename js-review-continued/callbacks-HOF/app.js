// Callback Functions
function morning(name) {
  return `Good Morning ${name.toUpperCase()}`
}

function afternoon(name) {
  return `Good Afternoon ${name.repeat(3)}`
}

function evening(name) {
  return `Good Evening ${name}`
}

// High Order Function
function greet(name, callback) {
  const myName = 'Oguzhan'
  console.log(`${callback(name)}, my name is ${myName}`)
}

// ! dont invoke your callback func when you pass it as an argument to your high order function
greet('bobo', morning)
greet(' peter', afternoon)
greet('susan', evening)

//* Callback Funtions, High Order Functions, Functions as First Class Objects/Citizens
//* Functions are first class objects - stored in a variable(expression), passed as an argument to another function, return from the function (closure)

//* High Order Function - accepts another function as an argument or returns another function as a result

//* Callback function - passed to an another function as an argument and executed inside that function

// function goodMorning(name) {
//   const myName = 'Oguzhan'
//   console.log(`Good morning ${name}, my name is ${myName}`)
// }
// function goodAfternoon(name) {
//   const myName = 'Ice'
//   console.log(`Good afternoon ${name}, my name is ${myName}`)
// }
// goodMorning('Bobo')
// goodAfternoon('Peter')
