
// Person constructor
function Person(name){
  this.name = name;
}

Person.prototype.Introduce = function(){
  console.log("Hello my name is  " + this.name);
}

// Teacher constructor
function Teacher(name, branch){
  Person.call(this, name);
  this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function(){
  console.log("I teach " + this.branch);
}

// Student constructor
function Student(name, number){
  Person.call(this, name);
  this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.study = function(){
  console.log("my student number is " + this.number);
}

// Headmaster constructor
function Headmaster(name, branch){
  Teacher.call(this, name, branch);
}

Headmaster.prototype = Object.create(Teacher.prototype);
Headmaster.prototype.constructor = Headmaster;
Headmaster.prototype.shareTask = function(){
  console.log("I have already shared all works");
}
let p1 = new Person('oguzhan')
p1.Introduce();

let t1 = new Teacher("aysel", "math")
t1.Introduce();
t1.teach();

let s1 = new Student("jone", "100")
s1.Introduce();
s1.study();

let hm1 = new Headmaster("ahmet", "biology")
hm1.Introduce(); // ınheritance from Person
hm1.teach(); // Inheritance from Teacher
hm1.shareTask(); // its own feature