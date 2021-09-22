const person = {
    name: "Obi",
    surname: "One",
}

Object.defineProperty(person, 'fullName', {
    get(){
        return `${this.name} ${this.surname}`

    },
    set(value){
        const parts = value.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
})

Object.defineProperty(person, "age", {
    value: 55,
    writable: true,
})

person.age = 22;
 
// console.log(person.fullName);

person.fullName = 'Jone Doe';
console.log(person.fullName);
console.log(person.age);
