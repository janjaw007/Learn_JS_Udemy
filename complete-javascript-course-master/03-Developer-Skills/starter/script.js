// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const printForecast = function (arr) {
  let result = '... ';

  for (let i = 0; i < arr.length; i++) {
    result = result + `${arr[i]}C in ${i + 1} days ... `;
  }
  return result;
};

console.log(printForecast([12, 5, -5, 0, 23, 4]));
// console.log(printForecast([17, 21, 23]));
