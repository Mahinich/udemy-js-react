'use strict';

const arr = [1, 2, 3, 4, 5, [1, 2, 3]];

/* function deepCount(data) {
  let count = data.length;

  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      count += deepCount(data[i]);
    }
  }

  return count;
}

console.log(deepCount(arr)); */

function deepCount(a){
  return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}

console.log(deepCount(arr));