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

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the CTO', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the CEO', id: 4, salary: 500 },
]

// * forEach
// ! does not return new array

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

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`
})

// we used join with empty sting to get rid of single quote of <h1></h1> tags
document.body.innerHTML = names.join('')
console.log(names)
console.log('**************************************************')

// * filter
// ! does not return a new array
// ? can manipulate the size of new array
// ? returns based on condition

const youngPeople = people.filter(function (person) {
  return person.age <= 25
})

const developers = people.filter(function (person) {
  return person.position === 'developer'
})

console.log(`youngPeople`, youngPeople)
console.log(`developers`, developers)
console.log('**************************************************')

// * find
// ? returns single instance - (in this case object)
// ! returns first match, if no match undefined
// ? great for getting unique value

const _names = ['bob', 'peter', 'susy']
console.log(
  _names.find(function (name) {
    // if no matched name it gives undefined not an error
    return name === 'bob'
  })
)

const person = people.find(function (person) {
  return person.id === 3
})
console.log('person with filter :', person.name)

const person2 = people.filter(function (person) {
  return person.id === 3
})
console.log('person2 with filter : ', person2[0].name)
console.log('**************************************************')

// * reduce
// ? iterates, callback function
// ? reduces to a single value - number, array, object
// ? 1 paramater ('acc') - total of all calculations
// ? 2 parameter ('curr') - current iteration/value

// important thing is here that what value will be returned ?
// number ? array ? object ? in our case we will return number so we passed 0(zero)
const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`)
  console.log(`current money:  ${currItem.salary}`)
  acc += currItem.salary

  // ! always always always return acc not curr item!
  return acc
}, 0)

console.log(total)
