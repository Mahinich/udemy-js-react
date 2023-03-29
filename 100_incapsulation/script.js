'use strict';

/* class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = 'Mahinich';

  say = () => {
    console.log(`User's name: ${this.name} ${this.#surname}, age ${this._age}`);
  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Invalid value');
    }
  }
};

const andriy = new User('Andriy', 30);
console.log(andriy.surname);
andriy.say(); */


class Dog {
  constructor(paws, bark) {
    this.paws = paws;
    this._bark = bark;
  }

  #size = 'large';

  method = () => {
    console.log(`Dog has ${this.paws} paws, its size is ${this.#size} and it can say '${this._bark}'`);
  }

  get bark() {
    return this._bark;
  }

  set bark(newBark) {
    if (typeof newBark !== 'string' || newBark.length < 4 || newBark.length > 4) {
      console.log('invalid value');
    } else {
      this._bark = newBark;
    } 
  }

  get size() {
    return this.#size;
  }

  set size(newSize) {
    this.#size = newSize;
  }
}

const rex = new Dog(4, 'woof');

console.log(rex.size);
rex.size = 'XXL';
console.log(rex.size);
