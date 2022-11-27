'use strict';

const btns = document.querySelectorAll('button');
const wrap = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'my-class'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

/* if (btns[1].classList.contains('red')) {
  console.log('red');
} */

/* btns[0].addEventListener('click', () => {
  if (!btns[1].classList.contains('red')) {
    btns[1].classList.add('red');
  } else {
    btns[1].classList.remove('red');
  }
  
  // btns[1].classList.toggle('red');
}); */

// console.log(btns[0].className); // className is a deprecated method

wrap.addEventListener('click', (e) => { // hang event on parent wrap element to use event delegation
  console.dir(e.target);
  if (e.target && e.target.matches('button')) {
    e.target.classList.toggle('red');
  }
});

/* btns.forEach((btn) => {  // no event delegation, so further added element won't receive this event. IT'S A MISTAKE TO USE THIS METHOD
  btn.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'BUTTON') {
      e.target.classList.toggle('red');
    }
  })
}) */

const newBtn = document.createElement('button');
newBtn.classList.add('red');

wrap.append(newBtn);
