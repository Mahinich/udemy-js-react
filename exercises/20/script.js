'usea strict';

const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

/* function showGoodFilms(arr) {
  const goodRating = arr.filter(film => film.rating >=8);
  return goodRating
  console.log(goodRating);
}

showGoodFilms(films); */

/* function showListOfFilms(arr) {
 const filmsNames = arr.reduce((acc, film) => acc + ',' + film.name, '');
 return filmsNames
 console.log(filmsNames);
};

showListOfFilms(films); */

function setFilmsIds(arr) {
  return arr.map((film, index) => {
    film.id = index;
    return film;
  });
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(film => {
      film.id || film.id === 0 ? true : false; 
    });
}

// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)


checkFilms(tranformedArray);