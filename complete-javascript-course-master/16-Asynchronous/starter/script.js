'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  //countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  console.log('rederCountry', data);
  const htmlword = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          data.languages[Object.keys(data.languages)[0]].name
        }</p>
        <p class="country__row"><span>💰</span>${
          data.currencies[Object.keys(data.currencies)[0]].code
        }</p>
      </div>
    </article>
      `;

  countriesContainer.insertAdjacentHTML('beforeend', htmlword);
  //countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// const getContunryData = function (country) {
//   // Old School Way

//   // GET DATA
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   // respone as json
//   request.addEventListener('load', function () {
//     //convert json to object
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);
//     const htmlword = `
//     <article class="country">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${
//         data.languages[Object.keys(data.languages)[0]]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         data.currencies[Object.keys(data.currencies)[0]].name
//       }</p>
//     </div>
//   </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', htmlword);
//     countriesContainer.style.opacity = 1;
//   });
// };

// const getContunryAndNeighbour = function (country) {
//   // Old School Way

//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   // respone as json
//   request.addEventListener('load', function () {
//     //convert json to object
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     // render country 1
//     renderCountry(data);

//     // Get neighbour contunry (2)
//     const neighbour = data.borders?.[0];

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getContunryData('Thailand');
// getContunryData('Japan');
// getContunryData('USA');
// getContunryData('Taiwan');

// getContunryAndNeighbour('Thailand');

// old way

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// new way
// const request = fetch('https://restcountries.com/v3.1/name/thailand');
// console.log(request);

// const getContunryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (respone) {
//       console.log(respone);
//       return respone.json();
//     })
//     .then(function (data) {
//       [country] = data;
//       renderCountry(country);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(respone => {
    console.log(respone);

    if (!respone.ok) throw new Error(`${errorMsg} ${respone.status}`);

    return respone.json();
  });
};

const getContunryData = function (country) {
  // country 1
  // getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
  getJSON(
    `https://countries-api-836d.onrender.com/countries/name/${country}`,
    'Country not found woy'
  )
    .then(data => {
      renderCountry(data[0]);
      // const neighbours = [...data[0]?.borders];
      const neighbours = data[0].borders[0];
      // const neighbours = ['adsadasdas', 'adsadasdas'];

      if (!neighbours) throw new Error('No Neighbour found!');

      // country 2
      return getJSON(
        `https://countries-api-836d.onrender.com/countries/alpha/${neighbours}`,
        'Country neighbour not found woy'
      ).then(data => {
        renderCountry(data, 'neighbour');
      });

      // neighbours.forEach(neighbour => {
      //   // country 2
      //   return getJSON(
      //     `https://countries-api-836d.onrender.com/countries/alpha/${neighbour}`,
      //     'Country neighbour not found woy'
      //   ).then(data => {
      //     renderCountry(data, 'neighbour');
      //   });
      // });
    })
    .catch(err => {
      console.error(`${err} ⚠️`);
      renderError(`Something went wrong ⚠️⚠️ ${err.message}. Try Again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// const getContunryData = function (country) {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(respone => {
//       console.log(respone);

//       if (!respone.ok) throw new Error(`Country not found ${respone.status}`);

//       return respone.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbours = [...data[0]?.borders];
//       const neighbours = ['adsadasdas', 'adsadasdas'];

//       neighbours.forEach(neighbour => {
//         // country 2
//         return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//           .then(respone => {
//             console.log(respone);
//             if (!respone.ok)
//               throw new Error(`Country not found ${respone.status}`);
//             respone.json();
//           })
//           .then(data => renderCountry(data[0], 'neighbour'));
//       });
//     })
//     .catch(err => {
//       console.error(`${err} ⚠️`);
//       renderError(`Something went wrong ⚠️⚠️ ${err.message}. Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

btn.addEventListener('click', function () {
  getContunryData('USA');
});

// getContunryData('adsadasdas');

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
const whereAmI = function (lat, long) {
  let country;
  // fetch(
  //   `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
  // )
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}`
  )
    .then(res => {
      if (!res.ok)
        throw new Error(`wrong coordinate please try another ${res.status}`);

      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}`);
      return fetch(
        `https://countries-api-836d.onrender.com/countries/name/${data.countryName}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`this is catch errror ${err.message}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

whereAmI(52.508, 13.381);
whereAmI(19.073, 72.873);
whereAmI(-33.933, 18.474);

// getContunryData(whereAmI(52.508, 13.381));
*/

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lotter darw is happening 🔮');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN 🤑');
    } else {
      reject(new Error('You lost your money 🥲'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 second pass');
    return wait(1);
  })
  .then(() => {
    console.log('2 second pass');
    return wait(1);
  })
  .then(() => {
    console.log('3 second pass');
    return wait(1);
  })
  .then(() => {
    console.log('4 second pass');
  });

Promise.resolve('Resloved Imediallty').then(res => console.log(res));
Promise.reject(new Error('Rejected Imediallty')).catch(res =>
  console.error(res)
);
