'use strict';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normPrice = (price) => price.toFixed(2);

/* console.log(multiply20(20));
console.log(divide100(multiply20(20)));
console.log(normPrice(divide100(multiply20(12.63)))); */
// const compose = (a, b, c) => (x) => a(b(c(x)));
const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
const discount = compose(normPrice, divide100, multiply20);

console.log(discount(20));