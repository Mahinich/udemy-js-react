'use strict';


/* function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

showThis(3, 4); */

/* const obj = { 
  a: 10,
  b: 15,
  sum: function() {
    function shout() {
      console.log(this);
    }
    shout();
  }
}

obj.sum(); */

/* function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
}

let andriy = new User('Andriy', 30);

console.log(andriy); */

/* function sayName(surname) {
  console.log(this);
  console.log(this.name);
  console.log(this.surname);
  console.log(this.sex + surname);

}

const userMale = {
  name: 'Andriy',
  surname: 'Mahinich',
  sex: 'male',
};

sayName.call(userMale, 'tratata'); //parametrs are added directly after the calling object
sayName.apply(userMale, ['tratata']); //parametrs are added via array

function count(num) {
  return this * num;
}

const double = count.bind(5);
const _double = count.bind(10);

console.log(double(4));
console.log(_double(4)); */

// 1) У звичайній функції this = window, а якщо у режимі ʼuse strict', тоді this = undefined; 
// Для будь-якої функціі контекст виклику буде або 'undefined', або 'window', не в залежності де вона знаходиться. За прикладом функції sum в середині showThis;
// 2) Якщо в обєкті є метод, то його контест визову ссилаєтьсся на даний обʼєкт;
// 3) this у конструкторах та класах зсилається на кожний новий екземпляр обʼєктах;
// 4) Прив'язування конетексту виклика вручнy: call, apply, bind

/* const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  e.target.classList.add('another_style', 'different_style')
}); */

/* const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num`);
    };
    say();
  }
}

obj.sayNumber(); */

/* const double = a => a * 2;

console.log(double(5)); */

// Стрілочна функція немає свого контексту виклику і посилається на свій батьк. елемент. В нашому випадку sayNumber() це звичайна функція
// тому ссилається на на оʼбєкт в якому вона записана. Отже контекст виклику say() буде obj;