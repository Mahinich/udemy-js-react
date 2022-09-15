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

function go() {
  function start () {
    numberOfFilms = Number(prompt('How many films have you watches?', ''));
  
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films have you watches?', '');
    }
  }
  
  start();
  
   const personalMovieDB = {
    count: numberOfFilms,
    movies: { },
    actors: { },
    genres: [ ],
    privat: false,
  };
  
  function survey() {
    for (let i = 0; i < 2; i++) {
      firstQuestion = prompt('Pick oine of the last watched films', ''),
      secondQuestion = prompt('Rate it', '');
      
      if (firstQuestion === null || firstQuestion === '' || firstQuestion.length > 10 || secondQuestion === null || secondQuestion === '' || isNaN(secondQuestion)) {
        console.log('error');
        i--;
      } else {
        personalMovieDB.movies[firstQuestion] = secondQuestion;  
        console.log('done');
      }
    }
  }
  
  survey();
  
  function level() {
    if (personalMovieDB.count <= 10) {
      console.log('little quantity');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <=50) {
      console.log('medium quantity');
    } else if (personalMovieDB.count > 50) {
      console.log('high quantity');
    } else {
      console.log ('something wrong');
    }
  }
  
  level();
  
  function showMyDB(hidden) {
    if(!hidden) {
      console.log(personalMovieDB);
    } else {
      console.log('privat DB');
    }
  }
  
  showMyDB(personalMovieDB.privat); 
  
  function favouriteGenres() {
    const genres = new Array();
   for (let i = 1; i <= 3; i++) {
    let query = prompt(`Ваш улюблений жанр під номером ${i}?`);
    genres[i-1] = query;
   } 
   console.log(genres);
  }
  
  favouriteGenres();
} 

go();
// console.log(personalMovieDB);