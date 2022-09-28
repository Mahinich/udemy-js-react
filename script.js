'use strict';


/* const options = {
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
document.write( Object.keys(options) );

// let counter = 0;
// for (let key in options) {
//   if (typeof(options[key]) === 'object') {
//     for (let jey in options[key]) {
//       console.log(`Властивість ${jey} яка має значення ${options[key][jey]} `);
//       counter++
//     }
//   } else if (typeof(options[key]) === 'function') {
//     console.log(options[key]());
//   }
//   else {
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

console.log(age + '\n' + height);

const multitude = ['Andriy', 30];

let [name, years] = multitude;

console.log(typeof(years),',',typeof(name)); */

//--------------------------------

/* let [a, b, c,] = 'Andriy qweasd Mahinich'.split(' ');

console.log(a);
console.log(c);
console.log(b); */

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

/* let [a, b, c, d] = 'Andriy';

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

/*  let [first, second] = [];

 console.log(first);
 console.log(second); */

//--------------------------------

/* let values = {
  one: 'small',
  two: 'medium',
  three: 'large',
};

let {one: first, two: second, three: third} = values;

console.log(first);
console.log(second);
console.log(third); */

//--------------------------------

/* let values = {
  one: 'small',
  two: 'medium',
  three: 'large',
};

let {one, two, three, four = 100} = values;

console.log(one);
console.log(two);
console.log(three);
console.log(four); */

//--------------------------------

/* const definitions = {
  a: 'first',
  b: 'second',
  c: 'third',
};

let {a, ...rest} = definitions;

console.log(a);
console.log(rest.b);
console.log(rest.c); */

//--------------------------------

/* const definitions = {
  a: 'first',
  b: 'second',
  c: 'third',
};

let a, b, c;

// {a, b, c} = definitions; ERROR
({a, b, c} = definitions); // NO ERROR

console.log(a);
console.log(b);
console.log(c); */

//--------------------------------

/* let options = {
  items: {
    a: 'stol',
    b: 'monitor'
  },
  subjects: ['keys', 'earbuds'],
  name: 'Andriy',
}

let {items:{a, b}, subjects:[subj1, subj2], surname = 'Mah'} = options;

console.log(a);
console.log(b);
console.log(subj1);
console.log(subj2);
console.log(surname); */

//--------------------------------

/* const obj = {
  name: 'Andriy',
  surname: 'Mahinich',
}

Object.defineProperty(obj, 'name', {
  writable: true,
  configurable: false,
});

Object.defineProperties(obj, {
  name: {value: 'Andriy', writable:false},
  surname: {value: 'Mahinich', writable:true},
});

obj.surname = 'asd';
console.log(obj.name + '\n' + obj.surname); */

//--------------------------------

/* let person = {
  name: 'Andriy',
  surname: 'Mahinich',

  get fullName() {
    return `${this.name}, ${this.surname}`;
  }
};

console.log(person.fullName); */

//--------------------------------

/* let person = {
  name: 'Andriy',
  surname: 'Mahinich',

  get fullName() {
    return `${this.name}, ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  }
}

person.fullName = 'Natali Tarnavskaya';

console.log(person.name);
console.log(person.surname); */

//--------------------------------

/* let person = {
  name: 'Andriy',
  surname: 'Mahinich',
};

Object.defineProperty(person, 'fullname', {
  get() {
    return `${this.name}, ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(' ');
  }
});

console.log(person.fullname); */