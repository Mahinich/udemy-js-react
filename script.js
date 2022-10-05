'use strict';

/* string methods and properties */

let str = 'Andriy Mahinich';
const arr = ['table', 'pen', 'notes'];

console.log( str.slice(2, 6) ); 
console.log( str.slice(-6, -2) ); 
console.log( str.slice(1) ); 
console.log( str.substring(2) ); 
console.log( str.substring(2, 8) ); 
console.log( str.substring(8, 0) ); 
console.log( str.substring(-2) ); //doesn't apply minus values and show all string length
console.log( str.substr(2, 4) ); 
console.log( str.substr(-7, 4) ); 
console.log( str.toLocaleLowerCase() );
console.log( str.toUpperCase() );
console.log(str.length);
console.log( str[2] ); //can't to assign a value to the string element by index
console.log( str.indexOf('Mahinich') );
console.log(arr.length);

/* number methods */ 

const num = 9.3;

console.log( Math.round(num) );

const size = '13.2px';

console.log( parseInt(size) ); //The goal of this method to translate number type into another counting system, but we can use it as shown in console
console.log( parseFloat(size) ); ////The goal of this method to translate into decimals counting system from another counting system, but we can use it as shown in console