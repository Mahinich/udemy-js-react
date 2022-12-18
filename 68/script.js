'use strict';

const now = new Date();

/* console.log(new Date().getFullYear());
console.log(now.getFullYear()); // getUTCFullYear()
console.log(now.getMonth()); // getUTCMonth()
console.log(now.getDate());  // getUTCDate()
console.log(now.getHours()); // getUTCHours()
console.log(now.getMinutes()); // getUTCMinutes()
console.log(now.getSeconds()); // getUTCSeconds()
console.log(now.getMilliseconds());  // getUTCMilliseconds()
console.log(now.getDay()); // getUTCDay()
*/

// Date object has the same "set" methods as "get" except for 'getTimezoneOffset()'
// Also, it's available to add the second parametr in 'set' method.
// For example: new Date().setHours(13, 15); Second param respond for minutes;

/* console.log(now.getTime());
console.log(now.getTimezoneOffset());
console.log(new Date(1671206081080)); */

// const now = new Date('2022-12-16');
// new Date.parse('2022-12-16');
// console.log(now.setHours(40));

/* let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`цикл відпрацював за ${end - start} мілісекунд`); */