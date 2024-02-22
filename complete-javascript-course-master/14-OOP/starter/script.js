'use strict';
const Person = function (firstName, birthYear) {
  // Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Method
  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);

console.log(jonas);

//1. New Empty Object is created
//2. function is called, this = new empty {}
//3. {} linked to prototype
//4. function autmoatically return {}

const matila = new Person('Matila', 2017);
const jack = new Person('Jack', 1975);

console.log(matila, jack);

const jay = 'Jay';
console.log(jonas instanceof Person);
console.log(jay instanceof Person);

// Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ == Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = 'Homo sapiens';

console.log(jonas.species, matila.species);
console.log(jonas, matila);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
