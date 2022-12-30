'use strict';

const log = function(a, b, ...rest) {
  console.log(a, b, rest);
};

log('Gregory', 'Anton', 'Denis', 'Andriy', [2, 4, 6]);

function calcOrDouble(number, basis = 4) {
  console.log(number * basis);
}

calcOrDouble(3, 4);