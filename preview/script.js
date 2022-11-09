const btns = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

/* btn.onclick = function() {
  alert('a');
};

btn.onclick = function() {
  alert('b');
}; */

/* btn.addEventListener('click', () => {
  alert('c');
});

btn.addEventListener('click', () => {
  alert('d');
}); */

// let i = 0;

const deleteElement = (e) => {
  // e.target.remove();
  console.log(e.currentTarget);
  console.log(e.type);
  // i++;
  // if (i == 1) {
  //   btns.removeEventListener('click', deleteElement);
  // }
};

btns.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);


// btns.removeEventListener('mouseenter', deleteElement);

/* btns.forEach(btn => {
  btn.addEventListener('click', deleteElement, {once: true});
}); */

/* document.getElementsByTagName('button')[1].addEventListener('click', (ev) => {
  console.log(ev);
  console.log(ev.target);
  ev.target.remove();
}); */

/* const link = document.querySelector('a');

link.addEventListener('click', (ev) => {
  ev.preventDefault();

  console.log(ev.target);
}); */