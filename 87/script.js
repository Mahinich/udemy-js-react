'use strict';

// filter

/* const names = ['Ivan', 'Andriy', 'Ann', 'Nikunji', 'Aj'];

const shortNames = names.filter(function(name) {
  return name.length < 5; 
});

console.log(shortNames); */
/* ___________________________________________________________ */

// map

/* const answers = ['AnDriY', 'ChunGaCHanga', 'aBU'];

const result = answers.map(item => item.toLowerCase()); // short notation in one row;

// const result = answers.map(item => { // the same as notation above
//   return item.toLowerCase();
// });

// const answers = ['AnDriY', 'ChunGaCHanga', 'aBU'];
// answers = answers.map(item => item.toLowerCase()); // no strict rules to create a new variable to use map(). But it's better to save initial data and to create a new variable for a new array;
// console.log(answers);

console.log(result); */

/* ___________________________________________________________ */

// every / some

/* const some = [4, 'asfsf', 'qwd3f'];

// console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number')); */
/* ___________________________________________________________ */

// reduce

/* const arr = [4, 5, 7, 8, 1];
                //0   4
                //4   5
                //9   7
                //16  8
                //24   1
const result = arr.reduce((sum, current) => sum + current, 5); // an argument (5) after callback is optional;
console.log(result); */

/* const arr = ['My', 'favourite', 'number', 'is', '9'];

const result = arr.reduce((sum, current) => `${sum}, ${current}`, 'qwe');
console.log(result); */

const obj = {
  andriy: 'person',
  natali: 'person',
  dog: 'animal',
  parrot: 'animal'
};

const modifiedtData = Object.entries(obj) //chainng method to write array method insted of creating new variable for each next method.
.filter(item => item[1] === 'person')
.map(item => item[0]);
console.log(modifiedtData);
