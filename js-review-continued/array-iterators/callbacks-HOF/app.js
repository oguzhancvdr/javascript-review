// Powerfull array methods
// forEach, map, filter, find, reduce
// Iterate over array - no for loop required
// Accept CALLBACK function as an argument, calls Callback against each item in an array. Reference Item in the Callback parameter

// for loop reminder
const numbers = [0, 1, 2, 3, 4]
// show all numbers

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
console.log('**************************************************')

// * forEach
// ! does not return new array

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the CTO' },
  { name: 'anna', age: 35, position: 'the CEO' },
]

// callback funtion of forEach
function showPerson(person) {
  console.log(person.position.toUpperCase())
}
people.forEach(showPerson)

// callback funtion as an anonymous function for forEach parameter
people.forEach(function (person) {
  console.log(person.name)
})
console.log('**************************************************')

// * map
// ? does return a new array
// ! does not change size of original array
// ? uses values from original array when making new one

// due to map returns a new array we can assign it to a variable to store new array
const ages = people.map(function (person) {
  return person.age + 20
})

// we can modify orignal array to produce new array as what we want
const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  }
})

const names = people.map(function(person){
  return `<h1>${person.name}</h1>`
})

// we used join with empty sting to get rid of single quote of <h1></h1> tags
document.body.innerHTML = names.join('');
console.log(names)

