/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Andriy",
        "Natali",
        "Mahinich",
        "Family",
        "Happy"
    ]
};

const annoyingAd = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const listOfFilms = document.querySelector('.promo__interactive-list');

const deleteListener = (e) => {
    console.log(e.target);
    action();
}

document.querySelector('.header__logo').addEventListener('click', deleteListener);
// document.querySelector('.header__logo').removeEventListener('click', deleteListener);



function action() {
    annoyingAd.forEach((e) => {
        e.remove();
    })
    
    genre.textContent = 'Drama';
    bg.style.cssText = 'background-image:url("img/bg.jpg")';
    
    movieDB.movies.sort();
    // console.log(movieDB.movies);
    
    listOfFilms.innerHTML = '';
    
    movieDB.movies.forEach((film, i) => {
        listOfFilms.innerHTML += `
        <li class="promo__interactive-item">${i+1}) ${film}
        <div class="delete"></div>
        </li>
        `
    })
}

