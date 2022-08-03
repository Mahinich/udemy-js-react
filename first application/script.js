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

const firstQuestion1 = prompt('Pick oine of the last watched films'),
      secondQuestion1 = prompt('Rate it', ''),
      firstQuestion2 = prompt('Pick oine of the last watched films'),
      secondQuestion2 = prompt('Rate it', '');

personalMovieDB.movies[firstQuestion1] = secondQuestion1;      
personalMovieDB.movies[firstQuestion2] = secondQuestion2;   

console.log(personalMovieDB);