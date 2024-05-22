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
  getContunryData('Australia');
});

// getContunryData('adsadasdas');
