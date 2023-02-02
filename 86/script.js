'use strict';
 
/* console.log('Запит данних');

const req = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Підготовка данних...");
  
    const product = {
      name: 'TV',
      price: 2000,
    };
  
    resolve(product);
  }, 2000);
});

req.then((product) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      product.status = 'order';
      resolve(product);
      // reject();
    }, 2000);
  });
}).then(data => {
  data.modify = true;
  return data;
}).then(data => {
  console.log(data);
}).catch(() => {
  console.error('Сталась помилка');
}).finally(() => {
  console.log("Finally");
}); */

// const test = time => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(), time);
//   });
// };

// // test(1000).then(() => console.log('1000 ms'));
// // test(2000).then(() => console.log('1000 ms'));

// /* Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('All');
// }); */
// Promise.race([test(1000), test(2000)]).then(() => {
//   console.log('All');
// });

let promise = new Promise(function(resolve, reject) {
  setTimeout(() => {
    resolve('success'); //change places to see how it works
    reject(new Error('error')); //change places to see how it works
  },1000);
});
/* promise.then((result) => { //method then() receives two arguments. In case we want to up work only reject callback, then the first argument of then can be null, but also we can do it with catch method. In case upworking only resolve callback, we can pass only one argument.
  alert(result);}, (error) => alert(error)); */
  
/* promise.catch(error => alert(error)); // for "execution with an error (reject callback)"
.catch(f) */ // is a shortened version of .then(null, f)

promise.finally(() => alert('проміс завершений не зважаючи на результат'));
promise.then(arg => alert(arg));