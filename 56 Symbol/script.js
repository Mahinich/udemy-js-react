// 'use strict';

// const obj = {
//   'name': 'Test',
//   [Symbol('id')]: 1,
//   getId: function() {
//     return this[id];
//   }
// };

// /* let id = Symbol('id');

// obj[id] = 1; */

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // for (let item in obj) console.log(item);

/* _______________________________ */

const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol.for('id')]: 123
}

myAwesomeDB.id = '3435'

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);