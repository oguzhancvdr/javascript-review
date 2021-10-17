const container = document.querySelector('.container')
const btn = document.querySelector('.btn')
// const heading = document.querySelector('.heading')

function sayHello() {
  console.log('Greeting there')
}

btn.addEventListener('click', function () {
  const element = document.createElement('h1')
  element.classList.add('red')
  element.textContent = 'I am inside container'
  container.appendChild(element)
})

container.addEventListener('click', function (e) {
  if (e.target.classList.contains('red')) {
    console.log('hello there')
  }
})

// it gives an error of null because heading is not there when user clicks
// we can solve this issue thanks to bubling
// that is, as we add event listener to parent of heading(it is already exists on DOM tree) we can reach child's event
// 16th line solves this issue as explained above

// heading.addEventListener('click', sayHello)
