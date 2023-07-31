'use strict';
// console.log('hello');

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
//`Odd of ${game[team] || 'draw'}:${odd}`
// for (const [team, odd] of oddsObj) {
//   console.log(
//     `Odd of${game[team] && true ? ' victory' : ''} ${
//       game[team] || 'draw'
//     }:${odd}`
//   );
// }

//4
let keyValues2 = Object.values(game.scored);
console.log(keyValues2);

for (let nameScored of keyValues2) {
  console.log(nameScored);
}

/*
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
