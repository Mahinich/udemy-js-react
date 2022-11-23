'use strict';

const arr = ['Natali', 'Anton', 'Polina', 'Natali'];

function unique(arr) {
  return Array.from(new Set(arr));
}

console.log(unique(arr));
// const set = new Set(arr);

// set.add('Ivan')
//    .add('Anton');

// console.log(set);

// set.delete(value);
// set.has(value);
// set.size;
// set.clear();

/* for (let value of set) {
  console.log(value);
} */

/* set.forEach((value, valueAgain, set) => {
  console.log(value, valueAgain);
}); */

// console.log(set.values());
// console.log(set.keys());
// console.log(set.entries());