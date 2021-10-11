// nodeValue
// textContent

const item = document.getElementById('text')
const value = item.firstChild.nodeValue;
const easyValue = item.textContent;
console.log({easyValue, value});