'use strict';

const options = {
  name: 'Andrii',
  height: 185,
  age: 30,
  colors: {
    border: 'black',
    background: 'red',
  }
};

for (let key in options) {
  console.log(key + ' >>> ' + options[key]);
}

console.log(options['colors']['background']);