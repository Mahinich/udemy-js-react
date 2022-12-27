'use strict';

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello =  function() {
//     console.log(`Hello ${this.name}`);
//   };
// }

// User.prototype.exit = function() {
//   console.log(`Користувач ${this.name} вибув`);
// }

// const natali = new User('Natali', 30);
// const andriy = new User('Andriy', 30);


// natali.hello();
// andriy.hello();
// natali.exit();

// console.log(natali);
// console.log(andriy);

// Practice from https://javascript.info/constructor-new

/* function User(name, surname) {
  this.name = name;
  this.surname = surname;
  this.isAdmin = false;
}

let user1 = new User("Jack", "Abad"),
    user2  = new User ('Andr', 'Mahinich');

    console.log(user1);
    console.log(user2); */

/* function ShowData (text, number) {
  this.text = text;
  this.number = number;
}

let firstData = new ShowData('Andriy', 30)

console.log(firstData.text); */

/* const showAnotherData = new function() { //encapsulate the code that constructs the single object, without future reuse
  const newLocal = this;
  newLocal.text = 'Default text';
  this.number = undefined ?? 2;
} */

/* function ReturnTest() {
  this.value = true; 
  return {value: 'true'};
}

alert(new ReturnTest().value);
 
let a = new ReturnTest();
alert(a.value); */

function Construction(name) {
  this.name = name;
  this.sayHi = function() {
    confirm(`Does your name is ${this.name}`)
  };
} 

let firstConstruction = new Construction('Andriy');

firstConstruction.sayHi();