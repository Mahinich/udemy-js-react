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
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const aditionalMenu = {
    list: [
        'First point',
        'Second point',
        'Third point',
        'Fourth Point', 
    ]
}

const annoyingAd = document.querySelectorAll('.promo__adv img');
const bg = document.querySelector('.promo__bg');
const genre =  bg.querySelector('.promo__genre');
const moviesList = document.querySelector('.promo__interactive-list');
const menuList = document.querySelector('.promo__menu-list ul');

annoyingAd.forEach(el => {
    el.remove();
});

genre.textContent = 'DRAMA';

bg.style.backgroundImage = 'url("../img/bg.jpg")';

moviesList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>`;
})

menuList.innerHTML = '';

aditionalMenu.list.forEach((item, i) => {
    menuList.innerHTML += `<li><a class="promo__menu-item promo__menu-item_active" href="#">${item}</a></li>`;
})

document.querySelector('.promo__title').style.cssText = `border: 5px solid white;
                                                        color: red;
                                                        position: relative;
                                                        left: 100px;`;