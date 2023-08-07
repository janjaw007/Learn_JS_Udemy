'use strict';

/*
/////////////////////////////////////////////////////
//Deafault Parameters

const bookings = [];

const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger, //ES6
  time = 2
) {
  //ES5
  // numPassenger = numPassenger || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
    time,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000, 6);

/////////////////////////////////////////////////////
//Passing Arguments Works: Value vs. Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 237304231,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 237304231) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

//Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(jonas);
checkIn(flight, jonas);



/////////////////////////////////////////////////////
//First-class and Higher-Order functions
// first-class === regular function === function == value
//Higher-order === function accepted other function as argument OR function return a NEW fucntion OR BOTH!

/////////////////////////////////////////////////////
//function accepting callback functions!
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const plusSign = function (str) {
  return str.replace(/ /g, '+');
};

const deleteFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [...others].join('-');
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by:${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

transformer('JavaScript is the best!', deleteFirstWord);
//JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);


/////////////////////////////////////////////////////
//function Returning functions!

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('hello')('jonas');

const grat = greeting => name => console.log(`${greeting} ${name}`);

grat('Hey')('jao');


/////////////////////////////////////////////////////
//The call and apply Methods

const lufthansa = {
  airline: 'Lufthansa',
  iatCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatCode}${flightNum}`, name });
  },
};

lufthansa.book(239, ' Jonas Schmedtmann');
lufthansa.book(635, ' John Smite');

const eurowings = {
  airline: 'Eurowings',
  iatCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
//DOESTT NOT WORk
//book(23, 'Sarah Willaiams');

//Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iatCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

////////////////////////////////////////
//bind method

// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With Event Listners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax = (value) => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const addTaxRate2 = rate => value => value + value * rate;

console.log(addTaxRate2(0.23)(100));
console.log(addTaxRate2(0.23)(23));

////////////////////////////////////////
// Challenge #1
//==============Solution by JAO =============
//==============Solution by JAO =============
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  //1 create 'registerNewAnswer
  registerNewAnswer() {
    //1.1 display propt window
    let ans = Number(
      prompt(`${this.question}${pollChoiceLoop()}\n(Write option number !)`)
    );
    //1.2 upate answer array
    if (ans > 4) {
      ans = Number(
        prompt(
          `Wrong input try again!\n${
            this.question
          }${pollChoiceLoop()}\n(Write option number !)`
        )
      );
    }

    if (ans === 0 && ans < 4) {
      this.answers[0] = this.answers[0] + 1;
    } else if (ans === 1 && ans < 4) {
      this.answers[1] = this.answers[1] + 1;
    } else if (ans === 2 && ans < 4) {
      this.answers[2] = this.answers[2] + 1;
    } else if (ans === 3 && ans < 4) {
      this.answers[3] = this.answers[3] + 1;
    }

    // 4
    this.displayResults('string');
  },
  //3 create displayResults
  displayResults(type = {}) {
    if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    }
    if (typeof type === 'object') {
      console.log(this.answers);
    }
  },
};

const pollChoiceLoop = function () {
  let pollChoiceAns;
  for (const word of poll.options) {
    pollChoiceAns = pollChoiceAns + `\n${word}`;
  }
  return pollChoiceAns;
};

//2
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults();
//==============Solution by JAO =============
//==============Solution by JAO =============

//==============Solution by Jonas =============
//==============Solution by Jonas=============
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number !))`
      )
    );
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//   Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');


////////////////////////////////////////
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This wil never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This wil never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('This wil never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);


////////////////////////////////////////
// Clousres
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

console.dir(booker);
booker();
booker();
booker();

////////////////////////////////////////
// Clousres Example
//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f funcion
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 3);

////////////////////////////////////////
// Challenge #2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/
