'use strict';


/*const options = {
  name: 'Andrii',
  height: 185,
  age: 30,
  colors: {
    border: 'black',
    background: 'red',
  },
  makeTEst: function() {
    console.log('Tttessst');
  }
};

options.makeTEst();
console.log( Object.values(options) ); 

const h1 = document.querySelector('h1'); //const for diversity

h1.innerHTML = Object.values(options).length
document.write( Object.values(options) );

// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let jey in options[key]) {
//       console.log(`Властивість ${jey} яка має значення ${options[key][jey]} `);
//       counter++
//     }
//   } else {
//   console.log(key + ' ———> ' + options[key]);
//   counter++
//   }
// }

// console.log(counter); */

//--------------------------------

/* const obj = {
  a: 1,
  b: undefined,
  c: true,
  d: null,
  e: {
    'first value': 'one',
    'second value': 'two',
  }
};


for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
  if (typeof(obj[key]) === 'object') {
    for (let i in obj[key]) {
      console.log('властивість ' + i + ' має значення' + ' ' + obj[key][i]);
    }
  }
}

console.log(obj.e['first value']);
console.log(Object.keys(obj));
console.log(Object.values(obj)); */

//--------------------------------

/* const anotherObj = {
  name: 'Andriy',
  surname: 'Mahinich',
  parameters: {
    age: 30,
    height: 185,
  }
};

let {age, height} = anotherObj.parameters;

console.log(age, height);

const multitude = ['Andriy', 30];

let [name, years] = multitude;

console.log(typeof(years),',',typeof(name)); */

//--------------------------------

/* let [a, b, c,] = 'Andriy qweasd Mahinich'.split(' ');

console.log(a);
console.log(b);
console.log(c); */

//--------------------------------

/* let [q, w, e, , s, d, , x, c] = ['Andr', 'Nata', 'Ivan', 'Petro', 'Nadiya', 'Valeriy', 'Grigoriy', 'Makar', 'Korova'];

console.log(q);
console.log(w);
console.log(e);
console.log(s);
console.log(d);
console.log(x);
console.log(c); */

//--------------------------------

/* let [a, b, c, d] = 'Andrii';

console.log(a);
console.log(b);
console.log(c);
console.log(d); */

//--------------------------------

/* let [one, two, three] = new Set([1, 2, 3]);

console.log(one);
console.log(two);
console.log(three); */

//--------------------------------\

/* let user = {};

[user.name, user.surname] = 'Andriy Mahinich'.split(' ');

console.log(user.name);
console.log(user.surname); */

//--------------------------------

/* const person = {
  name: 'Andriy',
  age: 30,
};

for (let [x, y] of Object.entries(person) ) {
  console.log(`${x} and ${y}`);
} */

//--------------------------------
/*  const obj = {item: 'table', color: 'green'};

 console.log(Object.entries(obj)); */

//--------------------------------

/*  const person = new Map();
 person.set('name', 'Andriy');
 person.set('age', 30);

 for (let [key, value] of person) {
  console.log(`${key}: ${value}`)
  console.log(typeof(person));
 } */

//--------------------------------

/* let name = 'Andriy',
    surname = 'Mahinich',
    age = 30;

[name, surname, age] = [age, name, surname];

console.log(name);
console.log(surname);
console.log(age); */

//--------------------------------

/* let [item1, item2, ...rest] = ['Phone', 'tablet', 'mouse', 'earbuds', 'book'];

console.log(item1);
console.log(item2);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);
console.log(rest.length); */

//--------------------------------

 let [first, second] = [];

 console.log(first);
 console.log(second);