'use strict';

/* function* generator() {
  yield 'A';
  yield 'n';
  yield 'd';
}

const str = generator();

console.log(str.next().value);
console.log(str.next());
console.log(str.next().value);
console.log(str.next()); */

function* count(n) {
  for (let i = 0; i < n, i++;) {
    yield i;
  }
}

/* const counter = count(9);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value); */

for (let j of count(9)) {
  console.log(j);
}