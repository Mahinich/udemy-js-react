//exercise 1

/* const shoppingMallData = {
  shopsParams: [{
    width: 10,
    length: 5,},
    {width: 33,
    length: 21,},
    {width: 24,
    length: 3,},
    {width: 30,
    length: 20,},
    {width: 24,
    length: 12,}, 
    {width: 31,
    length: 62,},
    {width: 1.2,
    length: 5.3,},
    {width: 1.8,
    length: 1.2,},
    {width: 14,
    length: 7.255,},
    {width: 11,
    length: 6,}],

  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
}

function isEnoughBudget(data) {
  let square = 0;
  let volume = 0;

  data.shopsParams.forEach(shop => {
  square += shop.width * shop.length;
  })
  volume = square * data.height;
  console.log(volume);

  if(volume > data.budget / data.moneyPer1m3) {
    console.log('This budget is not enough');
  } else {
    console.log('Enough budget');
  }

}

isEnoughBudget(shoppingMallData); */

//exercise 2

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
  arr.sort();

  const a = [], b = [], c = [], rest = [];

  for(let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }

console.log([a, b, c, `Students who are left: ${rest.lenght === 0 ? '-' : rest.join(', ')}`]);
  return [a, b, c, `Students who are left: ${rest.lenght === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students);

