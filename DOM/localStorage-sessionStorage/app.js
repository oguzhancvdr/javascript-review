// WEB Storage API - provided by browser
// session storage, local storage
// setItem, getItem, removeItem, clear

// localStorage.setItem('name', 'jane')
// sessionStorage.setItem('name', 'marry')

localStorage.setItem('@NAME', 'Obi')
localStorage.setItem('@FRIEND', 'Ice')
localStorage.setItem('@JOB', 'developer')
localStorage.setItem('@ADDRESS', 'street 123')

const name_ = localStorage.getItem('@NAME')
console.log('name :>> ', name_);

// remove from local storage
localStorage.removeItem('@JOB')

// clear all localstorage
localStorage.clear()


// JSON.stringfy(), JSON.parse()

const friends = ['jhon', 'peter', 'bob']

// ! it will store as a sting not an array
// localStorage.setItem('@FRIENDS', friends)

// ? so we can fix this by using JSON.stringfy() method
localStorage.setItem('@FRIENDS', JSON.stringify(friends))

// due to stringfying our data we need to convert js object like below
const values = JSON.parse(localStorage.getItem('@FRIENDS'))
console.log('values :>> ', values[2]);

let fruits;

if(localStorage.getItem('@FRUITS')){
  fruits = JSON.parse(localStorage.getItem('@FRUITS'))
}else{
  fruits = []
}

console.log('fruits :>> ', fruits)
// fruits.push('apple')
fruits.push('orange')
localStorage.setItem('@FRUITS', JSON.stringify(fruits))