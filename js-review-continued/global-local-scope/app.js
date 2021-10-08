// Global Scope vs Local Scope
// Any variable outside code block {} is said to be in Global Scope
// can be access anywhere in the program
// Gotchas: name collissions, modify bt mistake

let _name = 'bobo'
_name = 'peter'

function calc() {
  // some other code..
  console.log(_name)
  _name = 'orange'
  function inner() {
    _name = 'inner name value'
    console.log(`this is from inner func`)
  }
  inner()
}
calc()

if (true) {
  // some other code..
  console.log(_name)
  _name = 'pants'
}
console.log(`my name is ${_name} and I'm perfect :P`)

// Local scope cannot be accessed from outside code blocks
// if - NOT VAR
console.log('*************LOCAL SCOPE***************')

let name_ = 'bibi'

function calculate() {
  const name_ = 'john'
  const age = 28
  // code goes here...
  becomesGlobal = 'global variable'
}
// if you try to access global variable from outside, but for invoking
// below code will throw an error which is ReferenceError
// console.log(becomesGlobal)
calculate()

// However, we try to access a global variable inside func after invoke it
// sure ! we can access that variable like below
console.log(becomesGlobal)

// we cannot access a local variable from the outside
// even if you invoke related func
// console.log(age) // ReferenceError

if (true) {
  const name_ = 'john'
}

{
  const name_ = 'john'
  const special = 'special'

}
console.log(special); // it throws an exception that is ReferenceError
// we can not acces local variable which is declareded by const or let

console.log(`my name is ${name_} and I'm perfect :P`)
