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



// 207. Prototypal Inheritance and The Prototype Chain

console.log(jonas.__proto__);

console.log(jonas.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 3, 2, 8, 4];

console.log(arr.__proto__);

console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {

  return [...new Set(this)];

};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);



// 210. ES6 Classes

class PersonCl {

  constructor(fullName, birthYear) {

    this.fullName = fullName;

    this.birthYear = birthYear;

  }

  calcAge() {

    console.log(2037 - this.birthYear);

  }

  greet() {

    console.log(`Hey ${this.fullName}`);

  }

  get age() {

    return 2037 - this.birthYear;

  }

  set fullName(name) {

    if (name.includes(' ')) this._fullName = name;

    else alert(`${name} is not a full name!`);

  }

  get fullName() {

    return this._fullName;

  }

  static hey() {

    console.log('Hey there');

    console.log(this);

  }

}

const jessica = new PersonCl('Gandalf Grey', 1996);

console.log(jessica);

jessica.calcAge();

console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

// 1. Classes not hoisted

// 2. Classes are 1st class citizens

// 3. Classes use strict mode

const walter = new PersonCl('Bilbo Baggins', 1965);



// 213. Object.create

const PersonProto = {

  calcAge() {

    console.log(2037 - this.birthYear);

  },

  init(firstName, birthYear) {

    this.firstName = firstName;

    this.birthYear = birthYear;

  },

};

const steven = Object.create(PersonProto);

console.log(steven);

steven.name = 'Steven';

steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);

sarah.calcAge();



// 215. Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {

  this.firstName = firstName;

  this.birthYear = birthYear;

};

Person.prototype.calcAge = function () {

  console.log(2037 - this.birthYear);

};

const Student = function (firstName, birthYear, 
course) {

  Person.call(this, firstName, birthYear);

  this.course = course;

};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {

  console.log(`My name is ${this.firstName} and I study ${this.course}`);

};

const mike = new Student('Mike', 2020, 'CS');

mike.introduce();

mike.calcAge();

console.log(mike.__proto__);

console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);

console.log(mike instanceof Person);

console.log(mike instanceof Object);

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {

  this.charge = chargeTo;

};

EV.prototype.accelerate = function () {

  this.speed += 20;

  this.charge--;

  console.log(

    `${this.make} is going at ${this.speed} mp/h, with a charge of ${this.charge}`

    );

  };

const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);

console.log(tesla);

tesla.brake();

tesla.accelerate();



// 217. Inheritance Between "Classes": ES6 Classes

class PersonCl {

  constructor(fullName, birthYear) {

    this.fullName = fullName;

    this.birthYear = birthYear;

  }

  calcAge() {

    console.log(2037 - this.birthYear);

  }

  greet() {

    console.log(`Hey ${this.fullName}`);

  }

  get age() {

    return 2037 - this.birthYear;

  }

  set fullName(name) {

    if (name.includes(' ')) this._fullName = name;

    else alert(`${name} is not a fullname!`);

  }

  get fullName() {

    return this._fullName;

  }

  static hey() {

    console.log('Hey Mr');

  }

}

class StudentCl extends PersonCl {

  constructor(fullName, birthYear, course) {

    super(fullName, birthYear);

    this.course = course;
  
  }

  introduce() {
  
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  
  }

  calcAge() {
  
    console.log(
  
      `I'm ${
  
        2037 - this.birthYear
  
      } years old, but as a student I feel more like 
      
      ${
      
        2037 - this.birthYear + 10
      
      }`
    
      );

    }

  }

const martha = new StudentCl('Marta Jones', 2012, 'CS');

martha.introduce();

martha.calcAge();



// 218. Inheritance Between "Classes": Object.create

const PersonProto = {

  calcAge() {

    console.log(2037 - this.birthYear);

  },

  init(firstName, birthYear) {

    this.firstName = firstName;

    this.birthYear = birthYear;

  },

};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {

  PersonProto.init.call(this, firstName, birthYear);

  this.course = course;

};

StudentProto.introduce = function () {
  
  console.log(`My name is ${this.firstName} and I study ${this.course}`);

};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');

jay.introduce();

jay.calcAge();