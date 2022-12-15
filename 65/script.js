const btn = document.querySelector('.btn');
const wrap = document.querySelector('.wrapper');
let timerId;
let i = 0;

function myAnimation() {
  const boxElem = document.querySelector('.box');
  let pos = 0;

  const id = setInterval(frame, 1);

  function frame() {
    /* if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      boxElem.style.cssText = `
        top: ${pos}px;
        left: ${pos}px;
      `;
    } */

    pos == 295 ? clearInterval(id) : pos++;
    
    boxElem.style.cssText = `
        top: ${pos}px;
        left: ${pos}px;
      `;
  }
}

btn.addEventListener('click', myAnimation);

/* ________________________________ */

/* btn.addEventListener('click', () => {
  // const timerId = setTimeout(newSettings, 100, '140px', '10px');
  timerId = setInterval(consoleText, 2000);
});

// clearInterval(timerId);

function consoleText() {
  if (i === 3) {
    clearInterval(timerId);
  }
  console.log('My Text');
  i++;
} */

/* let id = setTimeout(function log() {
  console.log('Natali');
  id = setTimeout(log, 1000);
},1000);
 */
/* function newSettings(param, pad) {
  wrap.style.cssText = `
  width: ${param};
  height: ${param};
  padding: ${pad}`;
} */