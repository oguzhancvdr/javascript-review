// createElement('elementTagName')
// createTextNode('text content')
// element.appendChild(childElement)
// insertBefore('element', 'location')
// replaceChild('new', 'old')

const result = document.querySelector('#result')
const first = document.querySelector('.red')

// create empty element
const bodyDiv = document.createElement('div')

// create text node
const text = document.createTextNode('a simple body div')

// append text node to bodyDiv
bodyDiv.appendChild(text)

// append bodyDiv to body
// document.body.appendChild(bodyDiv)
document.body.insertBefore(bodyDiv, result)

// result element
const heading = document.createElement('h2')
const headingText = document.createTextNode('Dynamic heading text')

heading.appendChild(headingText)
heading.classList.add('blue')
// result.appendChild(heading)

result.insertBefore(heading, first)

const smallHeading = document.createElement('h6')
const smallText = document.createTextNode('I am a small heading text')
smallHeading.classList.add('red')
smallHeading.appendChild(smallText)
document.body.replaceChild(smallHeading, bodyDiv)

console.log(result.children);

// insertBefore