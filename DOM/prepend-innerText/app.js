// prepend
// innerText

const heading = document.createElement('h2')
heading.innerText = `I am a dynamic heading text`
document.body.prepend(heading)

// remove
// removeChild

const result = document.querySelector('#result')
// result.remove();
// I'm looking for headings that are in my element with result id not inside document
const secondHeading = result.querySelector('h1')
result.removeChild(secondHeading)
console.log(secondHeading);
