let names = ['obi', 'ice', 'barry', 'olga', 'ben'];

// length
console.log(names.length);
// get last item
console.log(names[names.length-1]);

// concat
const lastNames = ['pepper', 'onion', 'banana'];
const allNames = names.concat(lastNames);
console.log(allNames);

// * reverse
console.log(allNames.reverse());

// insert begining of the array
// * unshift
allNames.unshift('susy');
console.log(allNames);

// remove item begining of the array
// * shift
// remove susy and banana
allNames.shift();
allNames.shift();
console.log(allNames);

// insert end of the array
// * push
allNames.push('anna')
console.log(allNames);

// remove items from end of the array
// * pop
allNames.pop();
allNames.pop();
console.log(allNames);

// grap specific items from the array
//* splice - mutates original array
const specificNames = allNames.splice(2,1);
console.log(specificNames);
console.log(allNames);





