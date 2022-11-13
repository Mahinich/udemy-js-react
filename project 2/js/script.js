/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const movieDB = {
    movies: [
      "Andriy",
      "Natali",
      "Mahinich",
      "Family",
      "Happy"
    ]
  };
  
  const annoyingAd  = document.querySelectorAll('.promo__adv img');
  const genre       = document.querySelector('.promo__genre');
  const bg          = document.querySelector('.promo__bg');
  const listOfFilms = document.querySelector('.promo__interactive-list');
  const form        = document.querySelector('form.add');
  const inputField  = form.querySelector('.adding__input');
  const checkbox    = form.querySelector('[type="checkbox"]');
  const submit      = form.querySelector('button');

  form.addEventListener('submit', (ev) => {
    ev.preventDefault();

    let newFilm = inputField.value;
    const isFavourite = checkbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      } 

      if (isFavourite) {
        console.log('Add favourite film');
      }
      
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMoviesList(movieDB.movies, listOfFilms);
    }

    ev.target.reset();
  });

  const deleteAD = function(arr) {
    arr.forEach((e) => {
      e.remove();
    });
  };

  // deleteAD(annoyingAd); function call is transfered down into united ordered calls' list

  const makeChanges = () => {
    genre.textContent = 'Drama';
    bg.style.cssText = 'background-image:url("img/bg.jpg")';
  };

  // makeChanges(); // function call is transfered down into united ordered calls' list

  const sortArr = (arr) => {
    arr.sort();
  };
  
  // sortArr(movieDB.movies); function call is transfered down into united ordered calls' list
  
  function createMoviesList(films, parent) {
    parent.innerHTML = '';

    sortArr(films);
    
    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i+1}) ${film}
      <div class="delete"></div>
      </li>
      `
    });

    document.querySelectorAll('.delete').forEach((basket, i) => {
      basket.addEventListener('click', () => {
        basket.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMoviesList(films, parent);
      });
    });
  }

  deleteAD(annoyingAd);
  makeChanges();
  createMoviesList(movieDB.movies, listOfFilms);
});