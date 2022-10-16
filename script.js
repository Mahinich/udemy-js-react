/* const obj = {
  a: 5,
  b: 'text',
};
 */

//--------------------------------


function copy(mainObj) {
  let copyObj = {};

  let key;

  for (key in mainObj) {
    copyObj[key] = mainObj[key]; 
  }

  return copyObj;
}

/* const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  }
};

const newNumbers = copy(numbers); 

newNumbers.a = 8
newNumbers.b = 'string'
newNumbers.c.y = 'chotiri'

console.log(newNumbers);
console.log(numbers); */

//--------------------------------

/* const addValues = {
  d: 3 + '33',
  e: 14 / '2',
};

const newObj = Object.assign(newNumbers, addValues, {name: 'Andriy', surname: 'Mahinich'});
console.log(newNumbers);

const cloneNewObj = Object.assign({},  {name: 'Andriy', surname: 'Mahinich'});
console.log(cloneNewObj); */

//--------------------------------

/* const oldArr = ['a', 'Mahi', 'Nata'];
const newArr = oldArr.slice();

console.log(oldArr);
console.log(newArr);

newArr[1] = 'Mahinich'
console.log(newArr); */

//--------------------------------

/* const films = ['terminator', 'wolverine', 'hellboy'],
      platforms = ['wordpress', 'opencart', 'tilda'],
      all = [...films, ...platforms];

console.log(all);  */     

//--------------------------------

/* function log(a, b, c, d) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

const num = [1, 3, 5, 7];
log(...num); */

//--------------------------------

/* const obj = {
  one: 1,
  two: 2,
};

const anotherObj = {...obj};

console.log(anotherObj);

anotherObj['new poperty'] = 'uraaa';

console.log(anotherObj); */