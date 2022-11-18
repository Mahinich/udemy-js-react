'use strict';

const birthday = Symbol('birthday');

const user = {
  name: 'Andriy',
  surname: 'Mahinich',
  [birthday]: '31/08/1992',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  }
}

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: false, configurable: true})

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI') );

Object.defineProperty(user, 'showMyPublicData', {enumerable: true});

for (let key in user) console.log(key);

console.log(Object.getOwnPropertyDescriptor(user, birthday) );

Object.defineProperties(user, { 
  name: {value: 'Natali', writable: false},
  surname: {writable: false}
});

// console.log(user);

// user.surname = 'Tarnavskaya';

Object.defineProperty(user, 'salary', {value:`\$1500`})

// console.log(Object.getOwnPropertyDescriptor(user, 'salary'));
// writable
// enumerable
// configurable