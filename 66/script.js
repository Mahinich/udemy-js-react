/* function func() {
  smth = 'string';
  console.log(smth);
}

func(); */

const someRes = getData();
const node = document.querySelector('.class');

setInterval(function() {
  if (node) {
    node.innerHTML = someRes;
  }
}, 1000);