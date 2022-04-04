/**
 * closure gives you an access to an outer function's scope from an inner function
 * make private variables with closures
 */

function outer() {
  let privateVal = "secret val";
  function inner() {
    console.log(`Hello inner ${privateVal}`);
  }
  return inner;
  // inner()
}
// console.log('privateVal :>> ', privateVal);

outer()();

// same like above
const val = outer();
console.log(val);
val();

// basic exampe

function newAccount(name, initialBlance) {
  let balance = initialBlance;
  function showBalance() {
    console.log(`Hello ${name}, your balance is ${balance}`);
  }

  return showBalance;
}

newAccount("susan", 129)();

const john = newAccount("jhon", 123);
const bob = newAccount("bob", 2222);
const obi = newAccount("obi", 1323);

john();
bob();
obi();

// complete example

function newAccountComplete(name, initialBlance) {
  let balance = initialBlance;
  function showBalanceComplete() {
    console.log(`Hello ${name}, your balance is ${balance}`);
  }

  function deposite(amount) {
    balance += amount;
    showBalanceComplete();
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Hello ${name}, sorry not enough funds.`);
      return;
    }
    balance -= amount;
    showBalanceComplete();
  }

  return { showBalanceComplete, deposite, withdraw };
}

const jane = newAccountComplete("jane", 1000);
const dane = newAccountComplete("dane", 333);

jane.showBalanceComplete();
jane.deposite(300)
jane.deposite(1000)
jane.withdraw(2400)
