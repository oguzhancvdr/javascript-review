// object literals

// let aysel = {
//   name: "aysel",
//   yearOfBirth: 1994,
//   job: "influencer",
// };

// function Person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//   this.calculateAge = function(){
//       return 2021 - this.yearOfBirth
//   }
// }

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
        this.calculateAge = function () {
            return 2021 - this.yearOfBirth;
        };
    }
}

let aysel = new Person("aysel", 1994, "influencer");
let oguzhan = new Person("oguzhan", 1993, "developer");

console.log({
    name: aysel.name,
    yearOfBirth: aysel.yearOfBirth,
    job: aysel.job,
    age: aysel.calculateAge(),
});

console.log('****************************');

console.log({
    name: oguzhan.name,
    yearOfBirth: oguzhan.yearOfBirth,
    job: oguzhan.job,
    age: oguzhan.calculateAge(),
});
