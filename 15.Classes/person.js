class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetinByName() {
    return `${this.name} says hello`;
  }
}

let myPerson = new Person("Ben", 40);
let myPerson2 = new Person("Todor", 30);

let greet = myPerson.greetinByName();
let greet2 = myPerson2.greetinByName();

console.log(greet);
console.log(greet2);

console.log(myPerson);
console.log(myPerson2);


