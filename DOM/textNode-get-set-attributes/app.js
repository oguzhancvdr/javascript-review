// nodeValue
// textContent

const item = document.getElementById('text')
const value = item.firstChild.nodeValue
const easyValue = item.textContent
console.log({easyValue, value})

// getAttribute()
// setAttribute()


const first = document.querySelector('.first')
const classValue = first.getAttribute('class')
const id = first.getAttribute('id')
console.log({classValue, id});

const link = document.getElementById('link')
const showLink = link.getAttribute('href')
console.log(showLink)

const afterLinkElement = link.nextElementSibling
afterLinkElement.setAttribute('class', 'first')
afterLinkElement.textContent = 'I also have a class of first'
console.log(afterLinkElement);

const links = document.querySelectorAll('.first')
console.log(links)