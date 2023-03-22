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

console.log(name.match(/s/gi));



/*
. - любой одиночный символ
[ ] - любой из них, диапазоны
$ - конец строки
^ - начало строки
\ - экранирование
\d - любую цифру
\D - все что угодно, кроме цифр
\s - пробелы
\S - все кроме пробелов
\w - буква
\W - все кроме букв
\b - граница слова
\B - не границ

Квантификация
n{4} - искать n подряд 4 раза
n{4,6} - искать n от 4 до 6
* от нуля и выше
+ от 1 и выше
? - нуль или 1 раз
*/