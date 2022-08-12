'use strict';
const numberOfFilms = +prompt('How many films have you watched?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: [ ],
   actors: { },
   genres: [ ],
   privat: false,
};

/* const firstQuestion = prompt('Pick oine of the last watched films'),
     firstAnswer = prompt('Rate it', ''),
     secondQuestion = prompt('Pick oine of the last watched films'),
     secondAnswer = prompt('Rate it', '');

personalMovieDB.movies[firstQuestion] = firstAnswer;      
personalMovieDB.movies[secondQuestion] = secondAnswer;   */ 
let i = 0;

do {
   i++;

   const film = prompt('Pick one of the last watched films'),
   rating = prompt('Rate it', '');
   
   if (film !== null && rating !== null && film !== '' && rating !== '' && film.length < 50) {
      personalMovieDB.movies[film] = rating; 
      console.log('done');     
   } else {
      console.log('error');
      i--;
   }

} while (i < 1);

   if (personalMovieDB.count < 10) {
      alert('Not many films are watched');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert('Not a little quantity are watched')
   } else if (personalMovieDB.count > 30) {
      alert('FILM-LOVER');
   } else {
      alert('ERROR');
   }
      
console.log(personalMovieDB);