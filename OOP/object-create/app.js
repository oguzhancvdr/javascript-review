// Object.create

let personProto = {
  calculateAge : function(){
    return 2021 - this.yearOfBirth;
  }
}

let obi = Object.create(personProto)

obi.name = "obi";
obi.yearOfBirth = 1993;
obi.job = "developer";

let ice = Object.create(personProto, {
  name: {value: "ice"},
  yearOfBirth: {value: 1994},
  job: {value: 'influencer'}
})

console.log('obi :>> ', obi);
console.log('age of obi :>> ', obi.calculateAge());

console.log('ice :>> ', ice);
console.log('age of ice :>> ', ice.calculateAge());

console.log("******************************************************");

// Prototpal Inheritance

let Person = function(name, job, yearOfBirth){
  this.name = name;
  this.job = job,
  this.yearOfBirth = yearOfBirth;
}

Person.prototype.calculateAge = function(){
  return 2021 - this.yearOfBirth;
}

// set Teacher constructor
let Teacher = function(name, job, yearOfBirth, subject){
  Person.call(this, name, job, yearOfBirth);
  this.subject = subject;
}

// Inherit the Person prototype methods
Teacher.prototype = Object.create(Person.prototype);

// set Teacher constructor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function(){
  return "Hello my name is " + this.name;
}

let aysel = new Teacher("aysel", "teacher", 1994, "math");

console.log(aysel);
console.log('aysel :>> ', aysel.calculateAge());
console.log('aysel :>> ', aysel.greeting());