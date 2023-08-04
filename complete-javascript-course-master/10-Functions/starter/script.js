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
*/

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
