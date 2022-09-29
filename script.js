// const arr = [1, 2, 3, 6, 7, 8]; // working for instances till row 38

/* arr.pop();
console.log(arr);

arr.push(['a', 'b']);
console.log(arr);

arr.unshift('Andriy');
console.log(arr);

arr.shift();
console.log(arr); */

//--------------------------------


/* for (let i = 0; i < arr.length; i++ ) {
    console.log(arr[i]);
} */

//--------------------------------

/* for (let key of arr) {
    console.log(key);
}  */

//--------------------------------

/* arr[99] = 'item';
console.log(arr.length);
console.log(arr); */

//--------------------------------

/* arr.forEach((el, i, arr) => {
    console.log(`index ${i} >>> ${el} inside ${arr}`);
} );

arr.forEach((el) => {
    console.log(el);
} );

arr.map((el) => {
    console.log(el);
} ); */

//--------------------------------

/* const arrForStr = prompt('', 'new word for string');

const itemsArr = arrForStr.split(' ');
itemsArr.sort();
console.log(itemsArr);
console.log(itemsArr.join(', ')); */

//--------------------------------

/* const arr = [1, 32, 13, 26, 7, 8];

arr.sort(compareNum); //arr.sort() sorts numbers as strings. So at first it will show numbers that start with 1, then 2 and so on
                      //function compareNum and its utilizing as an argument of sort(), define numbers in right order;
console.log(arr);

function compareNum(a, b) {
  return a-b;
} */