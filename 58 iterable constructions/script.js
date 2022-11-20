'use strict';

const user = {
  name: 'Andriy',
  surname: 'Mahinich',
  birthday: '31/08/1992',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  },
};

/* for (const key of user) {
  console.log(user[key]);
} */

/* const arr = ['b', 'a', 'c'];

Array.prototype.someMethod = function() {};

// console.dir(arr);


for (const key of arr) {
  console.log(key);
} */

/* const str = 'string';

for (const key of str) {
  console.log(key);
} */

const salaries = {
  anton: 4500,
  grisha: 5000,
  andriy: 1500,
  sayHello: function() {
    console.log('Hello');
  }
};

salaries[Symbol.iterator] = function() {
  return {
    current: this.andriy,
    last: this.grisha,

    next() {
      if (this.current < this.last) {
        this.current = this.current + 500;
        return {done: false, value: this.current}
      } else { 
        return {done: true};
      }
    }
  };
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

/* for (let res of salaries) {
  console.log(res);
} */