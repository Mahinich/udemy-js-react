'use strict';

const box      = document.getElementById('box');
const btns     = document.getElementsByTagName('button');
const circles  = document.getElementsByClassName('circle');
const hearts   = document.querySelectorAll('.heart');
const oneHeart = document.querySelector('div');
const wrapper  = document.querySelector('.wrapper');

/* box.style.backgroundColor = 'pink';
box.style.width = '400px'; */

box.style.cssText = 'background-color: aqua; width: 150px; cursor: pointer;'

btns[2].style.borderRadius = '25px 5px 25px 5px';

circles[0].style.backgroundColor = 'green';

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'yellow';
// }

hearts.forEach(element => {
  element.style.backgroundColor = 'pink';
})

const div = document.createElement('div');
const textNode = document.createTextNode('Andriy');

div.classList.add('black');

// document.body.append(div);
document.body.prepend(div);
div.innerHTML = '<h1>Andriy</h1>';

div.insertAdjacentHTML('afterend', '<h2>And</h2>');

// div.textContent = 'Mahinich';

// wrapper.append(div);
// wrapper.prepend(div);

// btns[1].before(div);
// btns[1].after(div);

// circles[0].remove();

// hearts[1].replaceWith(circles[1]);

// wrapper.insertBefore(btns[2], hearts[1]); //derprecated
// wrapper.removeChild(hearts[1]); //derprecated
// hearts[0].replaceWith(btns[3]);
// wrapper.replaceChild(circles[0], hearts[2]); //derprecated