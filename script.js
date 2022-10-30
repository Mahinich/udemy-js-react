'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button');
console.log(btns);

const circles = document.getElementsByClassName('circle');
console.log(circles);

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(item => {
  console.log(item);
})

const oneHeart = document.querySelector('div');
console.log(oneHeart);

// wrapper.insertBefore(btns[2], hearts[1]); //derprecated
// wrapper.removeChild(hearts[1]); //derprecated
// hearts[0].replaceWith(btns[3]);
// wrapper.replaceChild(circles[0], hearts[2]); //derprecated