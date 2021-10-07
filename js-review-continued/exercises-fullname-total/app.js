// ? fullname excercise
// arrays and for loop

const names = ["anna", "susy", "bob", "john", "susan"];
const lastName = "shakeandbake";
let newArray = [];

// for loop
for (let index = 0; index < names.length; index++) {
  console.log(index);
  console.log(names[index]);
  const fullName = `${names[index]} ${lastName}`;
  newArray.push(fullName);
}
console.log(newArray);

// ? calculate total
// Functions, return, if, arrays, for loop

const gas = [20, 30, 100, "25", true, { a: "object" }, "52."];
const food = [10, 40, 50, "25", "Obi", { b: "object2" }, "22.."];

function calcTotal(one, two) {
  const concatedArr = one.concat(two);
  // ES6 way
  const mergeArr = [...one, ...two];
  
  let total = 0;
  for (let index = 0; index < mergeArr.length; index++) {
    const eachPrice = mergeArr[index];
    console.log(eachPrice);
    if (typeof eachPrice === "string" && eachPrice !== "") {
      let hasNaN = isNaN(eachPrice);
      total += hasNaN ? 0 : parseInt(eachPrice);
    } else if (typeof eachPrice !== ("number" || "string")) {
      total += 0;
    } else {
      total += eachPrice;
    }
  }
  return total > 300
    ? console.log("You are spending much!")
    : console.log("You are good your total is less than 300");
}
calcTotal(gas, food);
