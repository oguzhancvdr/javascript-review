// currentTarget - always refers to the element to which the event handler has been attached to

// target - identifies the element on which the event occured

const buttons = document.querySelectorAll('.btn')

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log('current target: ', e.currentTarget)
    // e.currentTarget.style.color = "yellow"
    console.log('target: ', e.target)
    e.target.style.color = 'yellow'
  })
})
