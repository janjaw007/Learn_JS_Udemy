'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

console.log('select all html', document.documentElement);
console.log('select head shtml', document.head);
console.log('select body', document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');

console.log('all sections', allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

console.log('all buttons', allButtons);

document.getElementsByClassName('btn');

//Creating and inserting elements
// insertAdjacentHTML

const message = document.createElement('div');

message.classList.add('cookie-message'); // look at style.css
message.textContent =
  'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it! </button>';

// Insert to header class
//header.prepend(message); //prepend add element as firstchild
header.append(message); // append add element as lastchild

//header.append(message.cloneNode(true)); //clone

//header.before(message); // add element before tag as same-level
//header.after(message); // add element after tag as same-level

//Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// set inline style
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// not work with non-standard

logo.alt = 'Beautiful minimalist logo';

console.log(logo.getAttribute('src'));

logo.setAttribute('comapany', 'Bankist');

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

/*
//////////////////////////////////////////////////////////////////// Selecting, Creating, and Deleting Elements

//Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSecions = document.querySelectorAll('.section');

console.log(allSecions);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
// .insertAdjacenHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionality and analyics.';
message.innerHTML =
  'We use cookied for improved functionality and analyics. <button class="btn btn--close-cookie">Got it! </button>';

// header.prepend(message); //add element as firstchild
header.append(message); // add element as lastchild

// header.append(message.cloneNode(true)); clone

// header.before(message); // add element before tag as same-level
// header.after(message); add element after tag as same-level

//Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//////////////////////////////////////////////////////////////////// Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';
//Non-standard
// console.log(logo.getAttribute('____'));

logo.setAttribute('comapany', 'Bankist');

console.log(logo.getAttribute('src'));

// const link = document.querySelector('.twitter-link');
const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not include

//Dont use it Overwrite class
logo.className = 'jonass';
=============================================
pause

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
});
*/
