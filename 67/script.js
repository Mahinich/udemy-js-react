'use strict';

/* let user = {b: 2, a: 3};

let map = new WeakMap();
map.set(user, 'data');

user = null;

console.log(map); */

let cache = new WeakMap(); // WeakMap - add(), has(), get(), delete(), can have only objects as keys and it's not iterable.

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = {name: 'Elena'};
let andriy = {name: 'Andriy'};

cacheUser(lena);
cacheUser(andriy);

lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(andriy));

// WeakSet  - add(), has(), delete(); it can cantain as elements only objects and it's not iterable.

let messages = [
  {text: 'Hello', from: 'Natali'},
  {text: 'Good afternoon', from: 'Andriy'},
  {text: 'Mrrrr', from: 'Puzir'},
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();


console.log(readMessages.has(messages[0]));
console.log(readMessages.has(messages[1]));
