'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  //ES6
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  //pre ES6 object enhanced
  // openingHours: openingHours,

  //ES6 syntax
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //pre ES6 syntax
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:20',
    address,
  }) {
    console.log(
      `Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPaster(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious paster with ${ing1}, ${ing2}, ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

///////////////////////////////////////////
// Working With Strings - Part 3

// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, LastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizationName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // namesUpper.push(n.replace(n[0], n[0].toUpperCase())); Alternative
  }
  console.log(namesUpper.join(' '));
};
capitalizationName('jessica ann smith davis');
capitalizationName('jonas schmedtmann');
capitalizationName('chayanit kitmek');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(234261234));
console.log(maskCreditCard(43234234234));
console.log(maskCreditCard('32423423423'));

//Repeat
const message2 = 'Bad weather... All Departues Delayed... ';

console.log(message2.repeat(5));

const planceInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planceInLine(5);
planceInLine(3);
planceInLine(12);
/*
///////////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
//make everything to lowercase
const passengerLowercase = passenger.toLowerCase();
//make first letter of passengerLowercase to Uppercase and put it back together with lowercase
const passengerCorrect =
  passengerLowercase[0].toLocaleUpperCase() + passengerLowercase.slice(1);
console.log(passengerCorrect);

// Comparing email
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';

// // make loginEmail to lowercase
// const lowerEmail = loginEmail.toLowerCase();

// // make lowerEmail not have whitespace
// const trimmedEmail = lowerEmail.trim();

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97$';
const priceUS = priceGB.replace('$', '#').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to bording door 23. boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a a gun for protection');

///////////////////////////////////////////
// Working With Strings - Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4, 7)); //lenght = end - start

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));
console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  let middleOrNot = s === 'B' || s === 'E' ? 'middle' : 'not middle';
  console.log(`Your ${seat} are ${middleOrNot} seat!`);
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


///////////////////////////////////////////
// Maps:Iteration
const question = new Map([
  ['question', 'What is the best programming languate inthe world ?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correctttt 😭'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours));

const hourMap = new Map(Object.entries(openingHours));

console.log('==>', hourMap);

//Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer'));
// console.log(typeof answer, typeof question.get('correct'));

// console.log(question.get(answer === question.get('correct')));

//convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);


///////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Itali');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('catagories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are close :(');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('catagories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.size);

console.log(rest.get(arr));



const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');

orderSet.delete('Risotto');

// orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

//Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

console.log(new Set('chayanitkitmek').size);

//property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days:`;
///////////////////////////////////////////
//Looping OBJECTS: OBJECT KEYS,VALUES AND ENTERIES
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}


///////////////////////////////////////////
//Optional Chaining (?.)
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open); ERROR
//WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

//Example

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const start of days) {
  const open = restaurant.openingHours[start]?.open ?? 'closed';
  console.log(`On ${start}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRiosstor?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'jonas', email: 'hello@jonas.io' }];
// const users = [];

console.log(users[0]?.name ?? 'User array emtpy');

///////////////////////////////////////////
//ENHANCED OBJECT LITERALS
//Search ES6


///////////////////////////////////////////
//FOR OF loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


///////////////////////////////////////////
//LOGICAL ASSIGNMENT OPERATORS
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner ??= 'JaoJao';
// rest2.owner ??= 'JaoJao';

//AND assignment operator
// rest1.owner = rest1.owner && 'JaoTarn';
// rest2.owner = rest2.owner && 'JaoTarn';

rest1.owner &&= 'Jaotarn';
rest2.owner &&= 'Jaotarn';

console.log(rest1);
console.log(rest2);
// rest2.owner = rest2.owner && 'JaoTarn';

// console.log(rest2);


///////////////////////////////////////////
//The Nullish Coalescing Operatoor (??)
restaurant.numGuests = 0;

const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);



console.log('------- OR ---------');

//Set Default Value
//Use any data type , return ANY data type,short-ciruiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null || 0);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);


//Chang existing value
console.log('------- AND ---------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && 'jonas' && 'jao');

//Pratical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');


///////////////////////////////////////////
//REST PATTERN and PARAMETERS
//1) Destructuring

//SPREAD, because on RIGHT handsight of equal assignment (=)
const arr = [1, 2, ...[3, 4]];

//REST, because of LEFT handsight of equal assignment (=)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat);

//2) function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];

add(...x);

restaurant.orderPizza('pineapple', 'cheese', ' tomato');
restaurant.orderPizza('mushroom');
///////////////////////////////////////////
//The Sprade Operator

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

const newArr = [1, 2, ...arr];
// console.log(newArr);

console.log(...newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];

console.log(letters);
console.log(...str);
console.log('j', 'o');

//Real-word example
// const ingredients = [
//   prompt("Let's make pasta ! Ingredient 1 ?"),
//   prompt('Ingredient 2 ?'),
//   prompt('Ingredient 3 ?'),
// ];

// console.log(ingredients);

// restaurant.orderPaster(ingredients[0], ingredients[1], ingredients[2]);

// restaurant.orderPaster(...ingredients);
// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// console.log(`${...str} Schmedtmann`);

///////////////////////////////////////////
// Destructuring objects

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});
const { name, openingHours, categories } = restaurant;

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// console.log(name, openingHours, categories);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
// console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
// console.log(o, c);

///////////////////////////////////////////
// Destructuring Arrays


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

//Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recives 2 return values from a function
const [start, mainCrouse] = restaurant.order(2, 0);
console.log(start, mainCrouse);

// Nested destructuring
const nested = [2, 4, [5, 6]];

// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);
*/
