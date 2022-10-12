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
  
const personalMovieDB = {
	count: 0,
	movies: { },
	actors: { },
	genres: [ ],
	privat: false,
	start: function() {
		personalMovieDB.count = +prompt('How many films have you watches?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
		personalMovieDB.count = +prompt('How many films have you watches?', '');
		}
	},
	survey: function() {
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
	},  
	level: function() {
		if (personalMovieDB.count <= 10) {
			console.log('little quantity');
		} else if (personalMovieDB.count > 10 && personalMovieDB.count <=50) {
			console.log('medium quantity');
		} else if (personalMovieDB.count > 50) {
			console.log('high quantity');
		} else {
			console.log ('something wrong');
		}
	},
	showMyDB: function(hidden) {
		if(!hidden) {
			console.log(personalMovieDB);
		} else {
			console.log('privat DB');
		}
	},
	toggleVisibleDB: function() {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false
		} else {
			personalMovieDB.privat = true
		}
	},
	favouriteGenres: function() {
			for (let i = 1; i < 2; i++) {
				let query = prompt(`Введіть ваші улюблені жанри через кому`).toLocaleLowerCase();

			if (query == null || query == ' ') {
				console.log('Incorect data');
				i--;
			} else {
				personalMovieDB.genres = query.split(', ').sort();
			}
			console.log(personalMovieDB.genres);
		} 

		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Favourite genre number ${i + 1} is ${item}`);
		});
	}
};