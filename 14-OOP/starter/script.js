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

//show that jonas is an incance of the person constructor
console.log(jonas instanceof Person);