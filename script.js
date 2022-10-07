/* const hero = {
  health: 500,
  armor: 100,
  sayHello: () => {
    console.log('hello')
  }
};

const john = {
  health: 100,
};

// john.__proto__ = hero;

Object.setPrototypeOf(john, hero);
console.log(john);
console.log(john.armor);
console.log(john.sayHello);

// console.log( Object.getPrototypeOf(john) );
console.log(john.__proto__); */

const human = {
  height: 1,
  weight: 1,
  consciousness: true,
  abilities: {
    walk: true,
    eat: true,
    fly: false,
  }
};


const andriy = {
  height: 185,
}

Object.setPrototypeOf(andriy, human);
console.log(andriy.abilities);

const andriy1 = Object.create(human, {
  hight: {
    value: 185,
  }
});
console.log(andriy1);

let clone = Object.create(Object.getPrototypeOf(andriy1), Object.getOwnPropertyDescriptors(andriy1));

console.log(clone.abilities);