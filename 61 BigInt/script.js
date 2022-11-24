'use strict';

// const bigint = 22323890013400814098170934913490980341981341340324134n;

const sameBigint = BigInt(22323890013400814098170934913490980341981341340324134);

console.log(5n === 5);

const bigint = 1n;
let num = 2;

console.log(bigint + BigInt(num));

console.log(Number(bigint) + num);