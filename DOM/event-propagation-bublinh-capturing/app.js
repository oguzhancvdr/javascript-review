// allows select dynamic elements
// event propogation - order the events fired
// event bubling - clicked element first then bubbles up -- default
// event capturing - fires at the root and fires until reaches target

const container = document.querySelector('.container')
const list = document.querySelector('.list-items')


function showBubbling(e){
  console.log('current target: ', e.currentTarget);
  // console.log('target: ', e.target);
  // if(e.target.classList.contains('link')){
  //   console.log('Link was clicked!');
  // }
}

function stopPropagation(e) {
  console.log('you clicked on list');
  e.stopPropagation()  
}

/**
 * * bubling
 * list.addEventListener('click', showBubbling)
 * container.addEventListener('click', showBubbling)
 * document.addEventListener('click', showBubbling)
 * window.addEventListener('click', showBubbling)
 */

/**
 * * stop propagation
 * list.addEventListener('click', stopPropagation)
 * container.addEventListener('click', showBubbling)
 * document.addEventListener('click', showBubbling)
 * window.addEventListener('click', showBubbling)
 */

// bubling going down from parent to child
window.addEventListener('click', showBubbling, {capture:true})
document.addEventListener('click', showBubbling, {capture:true})
container.addEventListener('click', showBubbling, {capture:true})
list.addEventListener('click', stopPropagation, {capture:true})
