'use strict';

const user = {
  name: 'Andriy',
  surname: 'Mahinich',
    birthday: '31/08/1992',
  showMyPublicData: function() {
    console.log(`${this.name} ${this.surname}`);
  },
}; 

const userMap = new Map(Object.entries(user));

console.log(userMap);

const shops = [
  {rice: 500},
  {vegetables: 200},
  {drinks: 50}
]

const budget = [5000, 15000, 25000];

const map = new Map([
  [{paper: 400}, 8000]
]);

shops.forEach( (shop, i) => {
  map.set(shop, budget[i]);
})
/* map.set(shops[0], 'shop1')
   .set(shops[1], 'shop2')
   .set(shops[2], 'shop3');
 */

  //  console.log(map);

/* console.log(map.get(shops[0]));
console.log(map.has(shops[0])); */

// map.delete(shops[1])
// map.clear()
// map.size();
// map.keys();

// console.log(map.keys());

/* const goods = [];

for (let shop of map.keys()) {
  goods.push(Object.keys(shop)[0]);
}

console.log(goods); */

/* for (let price of map.values()) {
  console.log(price);
} */

/* for (let [shop, price] of map.entries()) {
  console.log(price, shop);
} */

/* map.forEach((value, key, map) => {
  console.log(key, value);
}) */