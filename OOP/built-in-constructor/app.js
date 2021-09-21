// buit-in constructor

// * String
var str1 = "Obi";
var str2 = new String("Obi");

console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

if (str1 === "Obi") {
  console.log("yes");
} else {
  console.log("no");
}

if (str2 === "Obi") {
  console.log("yes");
} else {
  console.log("no");
}

String.prototype.repeat = function (n) {
  return new Array(n + 1).join(this);
};

console.log("obi".repeat(2));

// * Number

var num1 = 10;
var num2 = new Number(10);

// * Boolean
var bool1 = true;
var bool2 = new Boolean(true);

// * Object
var abj1 = {
  name: "obi",
};

var obj2 = new Object({
  name: "Obi",
});

// * Array

var arr1 = ["ice", "obi", "bob", "cevo"];
var arr2 = new Array("ice", "obi", "bob", "cevo");

Array.prototype.remove =
  Array.prototype.remove ||
  function (member) {
    var index = this.indexOf(member);

    if (index > -1) {
      this.splice(index, 1);
    }

    return this;
  };

console.log(arr1.remove("bob"));
