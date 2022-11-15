'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');
const clock = null;

// console.log(block);

/* if (block) {
  console.log(block.textContent);
} */

// block?.textContent = "123";

const userData = {
  name: 'Andriy',
  age: null,
  say: () => {
    console.log('Hello');
  }
};

userData.say();
userData.hey?.();

/* if (userData && userData.skills && userData.skills.js ) {
  console.log(userData.skills.js);
} */

console.log(userData?.skills?.js);