/**
 * Demo: Creating Objects
 * * Dışarıdan name ve salary bilgilerini alan Employee constructor'ı tanımlayınız
 * * Yıl içinde o ana kadar alınan toplam maaş ve
 * * alınan toplam vergi tutarını hesaplayan func oluşturun
 * * Vergi dilimleri:
 * ? 20.000'e kadar %20,
 * ? 30.000'e kadar %25,
 * ? 30.000'den sonra %27 vergi,
 */

function Employee(name, salary) {
  // Check instances are coming from Emplooye or not
  if (!(this instanceof Employee)) {
    return new Employee(name, salary);
  }
  this.name = name;
  this.salary = salary;
}

Employee.prototype.calculateSalary = function () {
  const month = new Date().getMonth() + 1;
  let tax = 0;
  let total = this.salary * month;

  if (total <= 20000) {
    tax = total * 0.2;
  } else if (total > 20000 && total < 30000) {
    tax = total * 0.25;
  } else {
    tax = total * 0.3;
  }

  return {
    tax,
    paid: total - tax,
  };
};

var emp1 = Employee("Obi", 3000);
var emp1_salary = emp1.calculateSalary();

console.log(
  `Named ${emp1.name} personal has took salary as total $${emp1_salary.paid} with tax cut which is $${emp1_salary.tax} `
);

var emp2 = Employee("Ice", 4000);
var emp2_salary = emp2.calculateSalary();

console.log(
   `Named ${emp2.name} personal has took salary as total $${emp2_salary.paid} with tax cut which is $${emp2_salary.tax} `
 );
