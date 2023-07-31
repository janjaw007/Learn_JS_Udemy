'use strict';
const books = [
  {
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: ['fantasy', 'high-fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
  },
  {
    title: 'The Cyberiad',
    publicationDate: 1965,
    author: 'Stanislaw Lem',
    genres: ['science fiction'],
    otherLanguagesTitle: {
      polish: 'Cyberiada',
      spanish: 'Ciberiada',
      french: 'Cybériade',
    },
  },
  {
    title: 'Dune',
    publicationDate: 1965,
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {},
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
  },
  {
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    filmAdaptation: true,
    otherLanguagesTitle: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
  },
];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = genre =>
  books.filter(book => book.genres.includes(genre));
const getBooksAsArrays = () => books.map(book => Object.entries(book));
const getBookAuthors = () => books.map(book => book.author);
getBooksByGenre('fantasy');
getBooksAsArrays();
getBookAuthors();

//SHORT CIRCUITING (&& and ||)
//exA
const getTitleInSpanish = function (books) {
  for (const book of books) {
    book.otherLanguagesTitle.spanish &&
      console.log(book.otherLanguagesTitle.spanish);
  }
};

//
/*
//REST PATTERN AND PARAMETERS
//ex A
const [theLoardOfTheRings, ...otherFantasyBooks] = getBooksByGenre('fantasy');

// console.log(otherFantasyBooks);

//ex B
const list = function (title, ...items) {
  console.log(`${title}:`);
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1}) ${items[i]}`);
  }
};

list(
  'My favorite books',
  'Brave New World',
  'The Great Gatsby',
  'Pride and Prejudice'
);


//The SPREAD SYNTAX
//ex A
let authors = ['George Orwell', 'Aldous Huxley', ...getBookAuthors()];
// console.log(authors);

//ex B

console.log(authors, ...authors);

//ex C
const firstName = 'John';
let firstNameArray = [...firstName];
console.log(firstNameArray);

//ex D
let [{}, { ...secondbook }] = books;
let cyberiad = { ...secondbook, filmAdaptation: false };
console.log(secBook);


//DESTRUCTURING OBJECTS
//ex A

let [{ author }] = books;
console.log(author);

let [{}, { title: bookTitle }] = books;
console.log(bookTitle);

let [{}, { hasFilmAdaptiation = false }] = books;
console.log(hasFilmAdaptiation);

[{}, {}, { author }] = books;
console.log(author);

//DESTRUCTURING ARRAYS
//ex A
const [a, b, c, d] = books;
// console.log(a, b, c, d);
//ex B
const [, secondary, third] = books;
console.log(secondary, third);

const [, [[, title]]] = getBooksAsArrays();
console.log(title);
*/
