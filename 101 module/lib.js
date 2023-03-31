const app = 'data';

const number = 1;

(function(){
  let number = 2;
  console.log(number);
  console.log(number + 3);
}());

console.log(number);
/* ------------------------------- */
const district = (function(){
 const privat = function() {
  console.log('I am privat function');
 };

 return {
  sayHello: privat
 };
}());

district.sayHello();
