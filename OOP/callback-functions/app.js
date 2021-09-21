let val;
function MultipleByTwo(a, b, c, callback) {
  let arr = [];
  if (callback && typeof callback === "function") {
    for (let i = 0; i < 3; i++) {
      // we can access a,b,c as arguments below
      arr[i] = callback(arguments[i] * 2);
    }
  }
  return arr;
}

function addOne(a) {
  return a + 1;
}

function addTwo(a) {
  return a + 2;
}

function addThree(a) {
  return a + 3;
}

val = MultipleByTwo(5, 15, 25, addThree);
val_with_anonyms = MultipleByTwo(5, 15, 25, function(a){
    return a + 5
});
console.log("val:", val);
console.log("val_with_anonyms :>> ", val_with_anonyms);
