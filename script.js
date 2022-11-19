'use strict';

const person = {
  name: 'Andriy',
  surname: 'Mahinich',
  age: 28,
}

// console.log(person);

const newPerson = {
  name: 'Natali', 
  secondName: 'Tarnavskaya', 
  age: 'Secret',
  [Symbol('temper')]: 'hot',
};

Object.assign (person, newPerson);

// console.log(newPerson);
/* ________________________________ */

const kitchen = {
  forProducts: 'Fridge',
  boilWater: 'Kettle',
  instruction() {
    // console.log(`Use a ${this.boilWater} to boil water, and ${this.forProducts} to store products. This place is called ${this.name}`)
  }
}

const anotherKitchen = Object.create(kitchen); 

anotherKitchen.name = 'kitchen';
anotherKitchen.boilWater = 'electric Kettle';

anotherKitchen.instruction();

/* ________________________________ */

const obj = {};

Object.defineProperties(obj, {
  i1: {
    value: 'Andriy',
    writable: false
  },

  i2: {
    value: 'Natali',
    enumerable: true,
  }
});

// console.log(obj);

// obj.i1 = 'Mahinich';

/* ________________________________ */

const obj1 = {};

Object.defineProperty(obj, 'value',  {
  value: 'some value',
  writable: true
});

obj.value = 'another value';
console.log(obj.value);

/* ________________________________ */

const arr = [['1', 'a'], ['2', 'b'], [3, 'c']];

const objFromEntries = Object.fromEntries(arr);

// console.log(objFromEntries);
/* ________________________________ */

const obj2 = {
  'first property': '1st',
  'second property': '2nd',
}

const descriptor1 = Object.getOwnPropertyDescriptor(obj2, ['first property']);
const keysFromObj2 = Object.keys(obj2);

// console.log(descriptor1);
// console.log(Object.getOwnPropertyDescriptors(obj2));
// console.log(Object.getOwnPropertyNames(obj2));
// console.log(Object.getOwnPropertyNames(keysFromObj2));
// console.log(Object.hasOwn(obj2, ['first property']));
// console.log(Object.hasOwn(keysFromObj2, 0));

/* ________________________________ */
