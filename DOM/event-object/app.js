const heading = document.querySelector('h1')
const btn = document.querySelector('button')
const link = document.querySelector('a')

heading.addEventListener('click', function (event) {
  console.log(event.currentTarget)
  heading.classList.add('blue')
  btn.classList.remove('blue')
})

btn.addEventListener('click', function (event) {
  console.log(event.currentTarget)
  console.log('event.type :>> ', event.type)
  btn.classList.add('blue')
  heading.classList.remove('blue')
})

link.addEventListener('click', function (event) {
  event.preventDefault()
  console.log('event.type :>> ', event.type)
})
