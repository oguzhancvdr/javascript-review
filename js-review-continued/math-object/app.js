// Math
// Standard built-in objects - always available

// rounds down
const floorNumber = 4.56789;
const resultFloor = Math.floor(floorNumber)
console.log(resultFloor);

// rounds up
const ceilNumber = 5.56789;
const resultCeil = Math.ceil(ceilNumber)
console.log(resultCeil);

const sqrtNumber = 25;
const resultSqrt = Math.sqrt(sqrtNumber)
console.log(resultSqrt);

const resultPi = Math.PI;
console.log(resultPi);

const resultMin = Math.min(5,6,7,1,9);
console.log(resultMin);

const resultMax = Math.max(5,6,7,1,9, 222, 333, 4444);
console.log(resultMax);

// to get rid of after decimal and start from 1 to 10 not from 0 to 9
const resultRandom = Math.ceil(Math.random() * 10)
const resultRandomFloor = Math.floor((Math.random() * 10) + 1)
console.log(resultRandom);
console.log(resultRandomFloor);