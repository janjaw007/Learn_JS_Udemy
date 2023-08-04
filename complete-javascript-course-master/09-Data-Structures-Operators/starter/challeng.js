'use strict';
// console.log('hello');

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46);

  console.log(output);
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/*
//Challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textAEl = document.querySelector('textarea');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
  //ใส่ค่าvalue จาก textarea เข้าตัวแปร
  const textLong = textAEl.value;
  //แยกคำในตัวแปลจากขึ้นบรรทัดใหม่ to Array
  const textArr = textLong.split('\n');
  //loop array นั้น
  for (const [i, textTrim] of textArr.entries()) {
    const [first, second] = textTrim.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)} ${'✅'.repeat(i + 1)}`);
    //====== Jonas's solution
    //========= MY solution ======
    // //จับคำของ loop แรกเข้าตัวแปลที่แยกด้วย _
    // const firstWord = textTrim.trim().toLowerCase().split('_')[0];
    // //แยกคำ 2ออกมา
    // const secondWord = textTrim.trim().toLowerCase().split('_')[1];
    // // เปลี่ยนตัวคำ 2 ตัวแรกเป็นตัวใหญ่
    // const secondWordUpper = secondWord.replace(
    //   secondWord[0],
    //   secondWord[0].toUpperCase()
    // );
    // //จับคำแรก + คำสอง
    // console.log(firstWord + secondWordUpper, '✅'.repeat(i + 1));
  }
});



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, 'GOAL'],
  [36, 'Substitution'],
  [47, 'GOAL'],
  [61, 'Substitution'],
  [64, 'Yellow card'],
  [69, 'Red card'],
  [70, 'Substitution'],
  [72, 'Substitution'],
  [76, 'GOAL'],
  [80, 'GOAL'],
  [92, 'Yellow card'],
]);

//Challenge #3

//1
const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log('==>', gameEvents.size);
const time = [...gameEvents.keys()].pop();
console.log('===>', time);
let eventHappened = gameEvents.size;
console.log(
  `An event happened, on average, every ${time / eventHappened} minutes`
);

//4
for (const [min, event] of gameEvents) {
  console.log(
    `${min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]'} ${min}: ${event}`
  );
}


//Challenge #2
//1
// for (const [i, name] of game.scored.entries()) {
//   console.log(`Goal${i + 1}:${name}`);
// }

//2
let sumOdd = 0;
let keyValues = Object.values(game.odds);
for (const odds of keyValues) {
  sumOdd += odds;
}

let avgOdd = sumOdd / keyValues.length;
// console.log(avgOdd);

//3
let oddsObj = Object.entries(game.odds);
// console.log(oddsObj);
// `Odd of ${game[team] || 'draw'}:${odd}`;
for (const [team, odd] of oddsObj) {
  console.log(
    `Odd of${game[team] && true ? ' victory' : ''} ${
      game[team] || 'draw'
    }:${odd}`
  );
}

//4
let keyValues2 = Object.values(game.scored);
console.log(keyValues2);

for (let nameScored of keyValues2) {
  console.log(nameScored);
}


//Challenge #1
//1
const [player1, player2] = game.players;

//2
const [gk, ...fieldPlayers] = player1;

//3
const allPlayers = [...player1, ...player2];

//4
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];

//5

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1);
console.log(draw);
console.log(team2);

//6

function printGoals(...playerName) {
  for (let i = 0; i < playerName.length; i++) {
    console.log(playerName[i]);
  }
  console.log(`goals scored:${playerName.length}`);
}
// printGoals(...game.scored);
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

//7
game.odds.team1 < game.odds.team2 && 'team1 win';
game.odds.team1 > game.odds.team2 && 'team2 win';
// console.log(teamWIN);
*/
