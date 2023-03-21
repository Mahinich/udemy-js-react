/* new RegExp('pattern', 'flags');
/pattern/f */

// const ans = prompt('Введіть ваше імʼя');

// const reg = /n/ig;

/* 
flags
i - to find lower and upper cases;
g - to find several icnomes(вхождений);
m - incudes multirows mode; 
flsgs can be combined (order is not strict)): reg = /n/i; reg = /n/ig; reg = /n/img;
*/

// console.log(ans.search(reg));
// console.log(ans.match(reg));

/* const pass = prompt('Password');
console.log(pass.replace(/\./g, '*')); */

// console.log('14-84-65'.replace(/-/g, ':'));

/* const answer = prompt('Ваші дані');
const reg1 = /\d/g;
console.log(answer.match(reg1)); */

const name = 'My name is R2D2';

console.log(name.match(/a\,s/gi));



/*
reExp Classes
 \d – digits
 \w – words
 \s – spaces 
*/

/* regExp reverse classes 
\D
\W */