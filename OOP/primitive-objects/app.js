var a = 10;
var b = a;

console.log({a, b});

var obj1 = {
  name: 'Obi',
  age: '28',
}
var obj2 = obj1;
obj1.age = 12;

console.log(obj1.age);
console.log(obj2.age);

var num = 50;
var account = {
  name: "Vedat",
  accountNumber: "12334345456",
}

function update(a, b){
  a = 100;
  b.accountNumber = "222222222";
}

update(num, account);
console.log({num, account});

var products = [
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
  {name: 'product name', price: 1000},
]

function filterProducts(items){
// do smth  

}

filterProducts(products)