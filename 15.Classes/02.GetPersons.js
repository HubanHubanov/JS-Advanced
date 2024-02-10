function getPersons() {
  class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }

    toString() {
      return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
  }

  let firstPerson = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
  let sceondPerson = new Person("SoftUni");
  let thirdPerson = new Person("Stephan", "Johnson", 25);
  let fourthPerson = new Person("Gabriel", "Peterson", 24, "g.p@gmail.com");

  let res = [firstPerson, sceondPerson, thirdPerson, fourthPerson];

  return res;
}

let persons = getPersons();

console.log(persons[1].constructor.name);
