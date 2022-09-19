'use strict';

/* let num = 20;

function showFirstMessage(a) {
   console.log(a);
   let num = 10;
   console.log(num);
}

showFirstMessage('ANdriy');
console.log(num); */

/* function calc(a, b) {
  return (a + b);
  console.log('asd');
}

calc(3, 8);
console.log( calc(4, 2) );
console.log( calc(5, 2) );
console.log( calc(6, 2) );
console.log( calc(4100, 2) ); */

/* function ret() {
  let num = 50;

  return num;
}

const obtainRet = ret();
console.log(obtainRet); */

/* const fnctnXprssn = function() {
  console.log('Natali');
};

fnctnXprssn(); */

/* const calc = (a, b) => a + b;

console.log( calc(4, 3) ); */

/* function createCounter() {       //need to repeat
   let counter = 0;
   const myFunction = function() {
     counter = counter + 1;
     return counter;
   }
   return myFunction;
 }
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log(increment);
console.log('example increment', c1, c2, c3); */

/* const usdCurr = 40;
const discount = 0.9;

function exchange(amount, curs) {
  return amount * curs;
}

function promo(result) {
  console.log(result*discount);
}

const a = exchange(10, usdCurr)
promo(a); */

/* function test() {
  for (let i = 0; i < 100; i++) {
    console.log(i);
    if (i === 3) return
  }
  console.log('Done');
}

test(); */

/* function humName(a) {
  return('Hello' + a);
}

humName('Andriy');
console.log(humName (' asd') ); */

/* function returnNeighboringNumbers(num) {
  const a = new Array(num - 1, num, num + 1);
  // a[0] = num - 1;
  // a[1] = num;
  // a[2] = num + 1;
  console.log(a);
  return a;
}

returnNeighboringNumbers(5); */

/* function operation(base, count) {
  if (typeof(count) !== 'number' || count <=0) {
    return(base);
  }
  
  let str = '';
  
  for (let i = 1; i <= count; i++) {
    if (i === count) {
      str += `${base * i}`;
    } else {
      str += `${base * i}---`;
    }
  }
  console.log(str);
}
 
operation(4, 13);
 */
/* exercises after lesson 23 */

/* function firstTask() {
  const arr = [3, 5, 8, 16, 20, 23, 50];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }
  console.log(result);
  return result;
}

firstTask(); */


/* const arr = [5, 10, 'Shopping', 20, 'Homework'];

function double () {
  const arrN = [];

  for(let i = 0; i < arr.length; i++) {
    arrN[i] = arr[i];

    if(typeof(arrN[i]) === 'number') {
      arrN[i] *= 2
    } else {
      arrN[i] = `${arrN[i]} - done`
    }
  }

  console.log(arrN);
  return arrN;
}

double (); */

/* const arr = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

function reverse() {
  for (let i = 1; i <= arr.length; i++) {
    result[i - 1] = arr[arr.length - i];
  }
  console.log(result);
}

reverse(); */

/* triangular figure */

/* const lines = 5;
let result = '';

for(let i = 1; i <= lines; i++) {
   for(let j = 0; j < i; j++) {
      result += '*';
   }
   result += '\n';
}

console.log(result); */

/* triangular figure after task 23 */

/* const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
  for (let j = 0; j < lines - i; j++) {
      result += " ";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
      result += "*";
  }
  result += "\n";
}

console.log(result) */


/* exercise after 27 */

/* function progression(num, repeater) {
  if(typeof(repeater) !== 'number' || repeater <= 0) {
    return num;
  }
  
  let result = '';

  for(let i = 1; i <= repeater; i++) {
    if(i === repeater) {
      result += `${num * i}`;
    } else {
      result += `${num * i}---`;
    }
  }
  console.log(result);
}

progression(5, 7); */

/* advanced exercises after 29 */

// -------------------------------

/* function calculateVolumeAndArea(length) {

  if(typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
    // console.log('Error');
    return 'Error';
  }
  
  let volume = length ** 3;
  let area = length **2 * 6;
  // 
  let str = `Об'єм куба: ${volume}, а площа поверхні: ${area}`;
  // console.log(str);
  return str;
}

const a = calculateVolumeAndArea(2 * '8');
console.log(a); */

// -------------------------------

/* function getCoupeNumber(place) {
  let errMessage = `Error, check the number`;
  let noSuchPlace = `Don't have such place`;
  if (Number.isNaN(place) || place < 0 || !Number.isInteger(place)) {
    return errMessage;
  }

  if(place === 0 || place > 36) {
    return noSuchPlace;
  }

  // if (place <= 4) {
  //   return 1;
  // } else if (place <= 8) {
  //   return 2;
  // } else if (place <= 12) {
  //   return 3;
  // } else if (place <= 16) {
  //   return 4;
  // } else if (place <= 20) {
  //   return 5;
  // } else if (place <= 24) {
  //   return 6;
  // } else if (place <= 28) {
  //   return 7;
  // } else if (place <= 32) {
  //   return 8;
  // } else if (place <= 36) {
  //   return 9;
  // }

  return Math.ceil(place / 4);
}

const coupe = getCoupeNumber(2);
console.log(coupe); */

// -------------------------------
