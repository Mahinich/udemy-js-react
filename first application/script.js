// let numberOfFilms = 333;

// let personalMovieDB = {
    // count: numberOfFilms,
    // movies: { },
    // actors: { },
    // genres: [ ],
    // privat: false,
// };

// let firstAnswer = prompt('How many films have have you seen?');
// let secondAnswer = prompt('Give your rate');

 let numberOfFilms;

 function start() {
  numberOfFilms = +prompt('How many films have you watches?', '');
  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms))
  numberOfFilms = +prompt('How many films have you watches?', '');
 }

 start();

 for (let i = 1; i <= 2; i++) {
  const question = prompt('Pick oine of the last watched films');
  const answer = prompt('Rate it', '');
 if (question !== null || question !== '' || question.length < 50 || answer !== null || answer !== '' || isNaN(answer)) {
  console.log('done');
  } else {
  console.log('error');
  i--;
  } 
 }
 
 const personalMovieDB = {
  count: numberOfFilms,
  movies: { },
  actors: { },
  genres: [ ],
  privat: false,
};

const firstQuestion = prompt('Pick oine of the last watched films'),
      firstAnswer = prompt('Rate it', ''),
      secondQuestion = prompt('Pick oine of the last watched films'),
      secondAnswer = prompt('Rate it', '');

personalMovieDB.movies[firstQuestion] = firstAnswer;      
personalMovieDB.movies[secondQuestion] = secondAnswer;   

console.log(personalMovieDB);