'use strict';

/*const Person = function (firstName, birthYear) {
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

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 9, 6, 9, 3]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

// add new method to origin prototype
// not good idea ==================
// if do this any array can use the method because it is inheritance from prototype of Array contrusctor
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(x => x + 1);*/

////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

// Constructor
const Car = function (make, speed) {
  // Instance properties
  this.make = make;
  this.speed = speed;
};


// implement
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.break();
*/
/*
// ES6 classes
// class expression
//const PersonCl1 = class {}

// class declaration

class PersonCl {
  // add constructor method

  // pass in property want to have in class
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // add method to class
  // method will be added to .prototype property of class

  //all of method write outside constuctor will be prototype for class for object created with this class can use
  calAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);

console.log(jessica);

jessica.calAge();

console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };

jessica.greet();

// 1. classes are not hoisted
// 2. classes are first-class citizes
// 3. classes are excuted in strict mode

// getter setter property

// basiclly fucntion that get value

const walter = new PersonCl('Walter White', 1965);

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account);

PersonCl.hey();



// object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// pass in the prototype for new object
const steven = Object.create(PersonProto);

//now PersonProto is prototype of steven object

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();

*/

// Coding Challenge #2

// ES6 class

//class declaration
// class Car {
//   // declare property for class with constructor
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed = this.speed + 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   break() {
//     this.speed = this.speed - 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   get speedUS() {
//     console.log(`${this.make} going at ${this.speed / 1.6} mi/h`);
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//     console.log(`${this.make} going at ${this.speed / 1.6} mi/h`);
//   }
// }

// const ford = new Car('Ford', 120);

// ford.speedUS;
// ford.accelerate();

// ford.speedUS = 50;

// console.log(ford);

/////////////////////////////////////////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

// delcare classes
// Parent
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// // declare classes
// // child
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking protoypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// // mike
// const mike = new Student('Mike', 2020, 'Computer Science');

// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);

// Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor);

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀


// class constructor

// Parent class
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// implement method for Car
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/m`);
};

Car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is slow down to ${this.speed} km/m`);
};

// Child Class
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking prototype EV with Car
EV.prototype = Object.create(Car.prototype);

// implement method for EV
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`${this.make} battery is now ${this.charge}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

EV.prototype.constructor = EV;

const toyota = new Car('Camry', 120);
const tesla = new EV('Tesla', 120, 23);

tesla.chargeBattery(90);
tesla.break();
tesla.accelerate();
toyota.accelerate();
*/
//   ///////////////////////////////////////
// // ES6 classes
// // class expression
// //const PersonCl1 = class {}

// // class declaration

// class PersonCl {
//   // add constructor method

//   // pass in property want to have in class
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance method
//   // add method to class
//   // method will be added to .prototype property of class

//   //all of method write outside constuctor will be prototype for class for object created with this class can use
//   calAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`hey ${this.fullName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a property that already exist
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hey there 👋');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce = function () {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   };

//   calAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');

// martha.introduce();
// martha.calAge();

//////////////////////////////////////////
// object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // pass in the prototype for new object
// const steven = Object.create(PersonProto);

// //create relationship pratent to child
// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} and I am study ${this.course} major`
//   );
// };

// // class for student
// const jay = Object.create(StudentProto);

// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// Public fields
// Private fields
// Publich methods
// Private methods
// (there is also the static version)

// class Account {
//   // Define Public fields (instances)  ==> access outside
//   locale = navigator.language;

//   // Define Private fields (instances) ==> cant access outside
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // protected property
//     this.#pin = pin;
//     //this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // Public methods
//   //public interface of Object (API)
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }

//   //public interace Object (API)
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   //private method ==> use to hide implemetation detail
//   _approveLoan(val) {
//     return true;
//   }

//   static helper() {
//     console.log('Helper');
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// acc1.deposit(250);
// acc1.withdraw(140);

// acc1.requestLoan(1000);

// console.log(acc1.getMovements());

// // console.log(acc1.#movements);
// //  console.log(acc1.#pin);
// // console.log(acc1.#approveLoan(100));

// // Chaining

// // should work with method that set property

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 


1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} slowing down to ${this.speed} km/h`);
    return this;
  }
}

class EVCl extends CarCL {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`Now battery is at ${this.#charge}%`);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }%`
    );
    return this;
  }
}

const tesla = new EVCl('Tesla', 120, 23);

tesla.accelerate().break().chargeBattery(90);
