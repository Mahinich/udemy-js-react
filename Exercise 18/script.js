'use strict';

const panagram = 'The quick brown fox jumps over the lazy dog';

/* function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

const test = isPangram(panagram);

console.log(test); */

/* ________________________________ */


/* function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

const test = isPangram(panagram);

console.log(test); */

/* ________________________________ */


/* function isPangram(str) {
  letters: for (var c = 0; c < 26; c++) {
      for (let i = 0; i < str.length; i++) {
          let s = str.charCodeAt(i)
          if (s < 65 || s > 90 && s < 97 || s > 122) continue
          if (s === 65 + c || s === 97 + c) continue letters
      }
    
      return false
  }
  
  return true
}

const test = isPangram(panagram);

console.log(test); */

/* ________________________________ */

function isPangram(string) {
  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

const test = isPangram(panagram);

console.log(test);