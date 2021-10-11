const listItems = document.getElementsByTagName('li')
console.log(listItems)

// it will throw an error
// Because it is an array like object not an exactly array
// That is HTMLCollection

// listItems.forEach(function(element) {
//   console.log(element);
// });

listItems[2].style.color = 'yellow'
for (let index = 0; index < listItems.length; index++) {
  const element = listItems[index]
  // console.log(element);
}

// with ES6 we can easly convert HTMLCollection to an array
const betterListItem = [...listItems]

betterListItem.forEach(function (element) {
  // console.log(element);
})

console.log(listItems)
console.log(betterListItem)

// With querySelector we dont need to do any tronsfarmation like above!

const parentList = document.querySelector('ul')
parentList.style.backgroundColor = 'red'

const items = document.querySelectorAll('.special')
console.log(items)
items.forEach(function (item) {
  console.log(item)
  item.style.color = 'yellow'
})
