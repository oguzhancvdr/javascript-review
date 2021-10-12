const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')

const classValue = first.className
// console.log(classValue);
// assign a class
second.className = 'colors'
// ? we can assign more than one class by using className like below
// ? simply we are overwriting
// ? but is it best practice ??
second.className += ' text'
second.className = 'colors text'

const classValues = third.classList

// ? Best practice is that add and remove using classList
// ? if we work with more than one class
// third.classList.add('colors')
// third.classList.add('text')
third.classList.add('text', 'colors')
third.classList.remove('text')

// * check particular element has that class or not
let result = third.classList.contains('colors')
console.log(result ? 'has that class' : 'does not have that class');
console.log(classValues)