// Functions that return Functions

function Question(hobby) {
  switch (hobby) {
    case "car":
      return function (name) {
        console.log(name + " do you have a car?");
      };
      break;

    case "book":
      return function (name) {
        console.log(name + " What is your book that you read last?");
      };
      break;

    case "software":
      return function (name, type) {
        console.log(name + " Are you interested in " + type + "?");
      };
      break;

    default:
      return function (name) {
        console.log(name + " Do you have a question?");
      };;

  }
}

var carQuestion = Question("car")
carQuestion('Obi')

var bookQuestion = Question("book")
bookQuestion('Ice')

var softwareQuestion = Question("software")
softwareQuestion('Rooney', "OOP")

// if we dont have a matched case 
var unusedTypeQuestion = Question("travel");
unusedTypeQuestion("Jane")