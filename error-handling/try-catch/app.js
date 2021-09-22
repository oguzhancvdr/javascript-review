// ReferenceError
// TypeError
// SyntaxError
// URIError

/**
 var user = {
   name: "Obi",
 };
 
 try {
   // console.log(myFunction());
   console.log(user.name);
 
   if (!user.email) {
     throw new Error("User has no email");
   }
   // console.log(user.email);
 } catch (error) {
   console.log("error :>> ", error);
   console.log(error.message);
   console.log(error.name);
   console.log(error instanceof ReferenceError);
   console.log(error instanceof TypeError);
   console.log(typeof error);
 } finally {
     console.log('finally');
 }
 
 */

// error-handling

document.getElementById("btn").addEventListener("click", function (e) {
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var errors = document.getElementById("errors");

  try {
    if (name.value.length === 0) {
      throw new Error("Name is required");
    }

    if (name.value.length > 20) {
      throw new Error("Name is too long.");
    }

    if (age.value.length === 0) {
      throw new Error("Age is required.");
    }

    if (isNaN(age.value)) {
      throw new Error("age is not numeric");
    }

    console.log('form is submitted');
  } catch (error) {
    errors.innerHTML = error.message;
  } finally {
    name.value = "";
    age.value = "";
  }

  e.preventDefault();
});
