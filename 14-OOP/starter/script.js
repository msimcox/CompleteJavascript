'use strict';

//Section 14.205
// Constructor Function
const Person = function (firstName, birthYear) {
  // Properties for the instances
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

//show that jonas is an instance of the person constructor
console.log(jonas instanceof Person);

//206. Prototypes

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

