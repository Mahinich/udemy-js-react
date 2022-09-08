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
 
operation(4, 13); */