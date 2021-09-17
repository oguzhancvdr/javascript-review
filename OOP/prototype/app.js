// Prototype

class Person {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // * move to prototype
    // this.calculateAge = function () {
    //   return 2021 - this.yearOfBirth;
    // };

  }
}

Person.prototype.calculateAge = function(){
    return 2021 - this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

Person.prototype.lastName = "cavdar"

let aysel = new Person("aysel", 1994, "influencer")
let oguzhan = new Person("oguzhan", 1993, "developer")

console.log('aysel :>> ', aysel);
console.log('aysel.calculateAge() :>> ', aysel.calculateAge());
console.log('aysel.getName() :>> ', aysel.getName());

console.log("**************************************************");

console.log('oguzhan :>> ', oguzhan);
console.log('oguzhan.calculateAge() :>> ', oguzhan.calculateAge());
console.log('oguzhan.getName() :>> ', oguzhan.getName());

console.log("**************************************************");

console.log(aysel.hasOwnProperty("name"));
console.log(oguzhan.hasOwnProperty("phone"));

console.log("**************************************************");

console.log('aysel :>> ', aysel.lastName);
console.log('oguzhan :>> ', oguzhan.lastName);