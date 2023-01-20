'use strict';

const workplace = {
  name: 'Unit city',
  address: 'Dorohozhycka 3'
}

console.log(JSON.stringify(workplace));
console.log(JSON.parse((JSON.stringify(workplace))));
// console.log(typeof(workplace));

// const clone = structuredClone(workplace); //? doesn't work
console.log(clone);