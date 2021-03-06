// childNodes - returns all childNodes including whitespace which is treated as a text node

// children - only return actual children not text nodes, white spaces
// firstChild
// lastChild

const result = document.querySelector('#result')
const allChildren = result.childNodes
console.log(allChildren)

// * children
const children = result.children
console.log(children)

// * firstChild
console.log(result.firstChild)
console.log(result.lastChild)

// * parent element

const heading = document.querySelector('h2')
console.log(heading.parentElement.parentElement)
const parent = heading.parentElement
parent.style.color = 'red'

// previosSibling

const first = document.querySelector('.first')
// to reach excat second element we need to chain two times with nextSibling property otherwise it gives white space to us
const second = first.nextSibling.nextSibling.style.color = 'red '

const last = document.querySelector('#last')
const fifth = last.previousSibling.previousSibling

console.log(fifth)

// previousElementSibling
// nextElementSibling

const _first = document.querySelector('.first')
// we dont need to think whitespace anymore
const sec = _first.nextElementSibling.style.color = 'blue'

const _last = document.querySelector('#last')
const _fifth = _last.previousElementSibling.style.color = 'red'
