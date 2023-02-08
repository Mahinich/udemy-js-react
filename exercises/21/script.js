'usea strict';

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
  return data.filter(item => item.amount > 0).reduce((sum, item) => {
    sum + item.amount;
  }, 0);
};

const a = getPositiveIncomeAmount(funds);
// console.log(a);

const getTotalIncomeAmount = (data) => {
  // return data.some(elem => elem.amount < 0) ? data.reduce((acc, item) => acc + item.amount, 0) : getPositiveIncomeAmount(data);

  if (data.some(elem => elem.amount < 0)) {
    return data.reduce((acc, item) => acc + item.amount, 0);
  } else {
    getPositiveIncomeAmount(data);
  }
};

const b = getTotalIncomeAmount(funds);
console.log(b);
