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

 const numberOfFilms = +prompt('How many films have you watches?', '');

 const personalMovieDB = {
  count: numberOfFilms,
  movies: { },
  actors: { },
  genres: [ ],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  firstQuestion = prompt('Pick oine of the last watched films', ''),
  secondQuestion = prompt('Rate it', '');
  
  if (firstQuestion === null || firstQuestion === '' || firstQuestion.length > 10 || secondQuestion === null || secondQuestion === '') {
    console.log('error');
    i--;
  } else {
    personalMovieDB.movies[firstQuestion] = secondQuestion;  
    console.log('done');
  }
}

if (personalMovieDB.count <= 10) {
  console.log('little quantity');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <=50) {
  console.log('medium quantity');
} else if (personalMovieDB.count > 50) {
  console.log('high quantity');
} else {
  console.log ('something wrong');
}

console.log(personalMovieDB);