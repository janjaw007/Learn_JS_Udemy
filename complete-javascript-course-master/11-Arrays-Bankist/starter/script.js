'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  //.textContent = 0;
  movements.forEach(function (mov, i, arr) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};
createUsernames(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
/////////////////////////////////////////////////
// Computing Usernames
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

/////////////////////////////////////////////////
// Data Transformations: map, filter, reduce

////////////////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
//   // return 23;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementDescriptions);

////////////////////////////////////////////////
// The filter Method

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);

console.log(movements);
console.log(deposits);
console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

////////////////////////////////////////////////
// The reduce Method

console.log(movements);

//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur) => acc + cur, 0);

let balance2 = 0;
for (const mov of movements) balance2 = balance2 + mov;
console.log(balance);
console.log(balance2);

// Maximum value

const maxMovement = movements.reduce(
  (acc, cur) => (acc > cur ? acc : cur),
  movements[0]
);

console.log(maxMovement);


/////////////////////////////////////////////////
// The Magic of Chaining Methods
const eurToUsd = 1.1;
console.log(movements);
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  // .map((mov, i, arr) => {
  //   // console.log(arr);
  //   return mov * eurToUsd;
  // })
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

/////////////////////////////////////////////////
// Simple Array Methods


let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE NOT MUTATED
console.log('==== SLICE ====');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//SPLICE CHANGE ORIGINAL ARRAY MUTATED ARRAY
console.log('==== SPLICE ====');
// console.log(arr.splice(2));
// arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE MUTATED ARRAY
console.log('==== REVERSE ====');
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT NOT MUTATED
console.log('==== CONCAT ====');
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log('==== JOIN ====');
console.log(letters.join(' - '));

/////////////////////////////////////////////////
// The new at Method

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(-1));


/////////////////////////////////////////////////
// Loopiong Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
}

console.log('===== FOR EACH =====');
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(mov)}`);
  }
});

//0: function(200)
//1: function(450)
//2: function(400)
//....

/////////////////////////////////////////////////
// forEach With Maps and Sets
//=====MAP====
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});


/////////////////////////////////////////////////
// Challenge #1

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const realDogJulia = dogsJulia.slice(1, -2);

  const bothArray = realDogJulia.concat(dogsKate);
  console.log(bothArray);
  const loopDog = function (value, i, arr) {
    if (value >= 3) {
      console.log(
        `"Dog number ${i + 1} is an adult, and is ${value} years old`
      );
    } else {
      console.log(`"Dog number ${i + 1} is still a puppy 🐶`);
    }
  };
  bothArray.forEach(loopDog);
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////
// Challenge #2

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log('#1 humanAge:', humanAge);

  const ageOver18 = humanAge.filter(age => age >= 18);
  console.log('#2 ageOver18:', ageOver18);

  // const avgAge =
  //   ageOver18.reduce((acc, age) => acc + age, 0) / ageOver18.length;
  const avgAge = ageOver18.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  //2 3. (2+3)/2 = 2.5 /// 2/2+3/2 =2.5
  console.log('#3 avgAge:', avgAge);
  return avgAge;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); //DATA1
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); //DATA2

console.log('DATA1:', avg1);
console.log('DATA2:', avg2);



*/
/////////////////////////////////////////////////
// Challenge #3
const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, humanAge, i, arr) => acc + humanAge / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]); //DATA1
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]); //DATA2

console.log('DATA1:', avg1);
console.log('DATA2:', avg2);
