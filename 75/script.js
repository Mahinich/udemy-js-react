'use strict';

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello =  function() {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function() {
  console.log(`Користувач ${this.name} вибув`);
}

const natali = new User('Natali', 30);
const andriy = new User('Andriy', 30);


natali.hello();
andriy.hello();
natali.exit();

console.log(natali);
console.log(andriy);
