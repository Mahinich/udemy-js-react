'use strict';

/* string methods and properties */

/* let str = 'Andriy Mahinich';
const arr = ['table', 'pen', 'notes']; */

// console.log( str.slice(2, 6) ); 
// console.log( str.slice(-6, -2) ); 
// console.log( str.slice(1) ); 
// console.log( str.substring(2) ); 
// console.log( str.substring(2, 8) ); 
// console.log( str.substring(8, 0) ); 
// console.log( str.substring(-2) ); //doesn't apply minus values and show all string length
// console.log( str.substr(2, 4) ); 
// console.log( str.substr(-7, 4) ); 
// console.log( str.toLocaleLowerCase() );
// console.log( str.toUpperCase() );
// console.log(str.length);
// console.log( str[2] ); //can't to assign a value to the string element by index
// console.log( str.indexOf('Mahinich') );
// console.log(arr.length);

/* NUMBER METHODS */ 

/* let mill = 1000000;
let mill1 = 1_000_000;
let mill2 = 1e6;
let mcs = 1e-6;

console.log(mill);
console.log(mill1);
console.log(mill2);
console.log(mcs); */

/* let num = 1.23456;

console.log( Math.round(num*100) / 100 );
console.log(num.toFixed(1));
console.log(num.toFixed(3));
console.log(num.toFixed(4));
console.log(num.toFixed(10));

num.toFixed(2);
console.log( typeof(num) );
console.log(num);
 */

/* let num = 0.5;
let num1 = 0.2 + 0.3;

console.log(num == num1);
console.log(0.2 + 0.3 == 0.5); */

/* console.log(99999999999999999); //interesting case
console.log(199999999999999999); //interesting case */

/* NaN value is unique and it doesn't equal to anything and to itself NaN === NaN //false */

/* let num = 22;

console.log( isFinite(num) ); //check if a value is a regular number also excluding Infinity/-Infinity/NaN */

/* console.log(Number.isNaN(5*'aaa')); //true
console.log(isNaN(5*'a')); true
console.log(Number.isNaN('aaa')) //false 
console.log(isNaN('aaa')) //true 

// Number.isNaN && Number.isFinite check if an argument value belongs to type of number
// isFinite && isNaN autoconverts a value to number and then return true || false depends on a value */

/* console.log(Object.is('5', '5') ); //true
console.log('5' === '5'); //true

// Object.is('value', 'value'); is the same as value === value; */

/* let num1 = '100px'
let num2 = '100.4px'
let num3 = '10.4';

console.log(parseInt(num1));
console.log(parseInt(num2));
console.log(parseFloat(num1));
console.log(parseFloat(num2));
console.log(parseInt(num3));
console.log(parseFloat(num3)); */

/* console.log( Math.random() ); */

/* console.log( Math.max(3, 5, 8, 1, 0.4) );
console.log( Math.min(3, 5, 8, 1, 0.4) );
console.log( Math.pow(2, 3) ); */

/* MORE EXERCISE WITH STRING */

/* let str = ' Simple words';

console.log(str[2]);
console.log(str.at(str.length-1));
console.log(str.at(-2)); // .at method starts from the end if the argument is a negative;  */

/* let str = 'Mahinich Andriy';

for (let char of str) {
  console.log(char);
}

for (let i = str.length-1; i >= 0; i--) {
  console.log(str[i]);
} */

/* let str = 'vocabluary';

str = 'AAA' + str[2];

console.log(str); */

let str = 'samooborobna garna'.toUpperCase();

console.log(str);

console.log(str.indexOf('OB', 2));