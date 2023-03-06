'use strict';

/* localStorage.setItem('number', 5);
// localStorage.removeItem('number');
localStorage.clear();
console.log(localStorage.getItem('number') ); */

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      changeColor = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
  form.style.backgroundColor = 'grey';
}

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

changeColor.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.backgroundColor = 'white';
  }else {
    localStorage.setItem('bg', 'changed');
    form.style.backgroundColor = 'grey';
  }
});

const person = {
  name: 'Alex',
  age: 25
};

const serializedPerson = JSON.stringify(person);
localStorage.setItem('Alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('Alex') ) );