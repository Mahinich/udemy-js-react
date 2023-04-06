'use strict';

/* try {
  console.log('Appropriate');
  console.log(a);
  console.log('result');
} catch(error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
} finally {

}

console.log('Anyway work'); */
/* ------------------------------ */

try {
  const button = document.querySelector('.active').addEventListener('click', (e) => {
    console.log('It was a click');
  });
} catch(e) {
  // console.log(e);
}

console.log('Code continue...');