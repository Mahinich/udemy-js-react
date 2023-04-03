export let firstVar = 1;

let secondVar = 2;

export {secondVar};

export default function sayHello() { //as a default export can be only one item
  console.log('Hello Andriy');
}