'use strict';

const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
  const request = new XMLHttpRequest();

  request.open('GET', 'js/current1.json', /* async, login, password */);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();//if use POST method, then request.send(body) or another rquired element;

  /* request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'something went wrong';
    }
  }); */

  request.addEventListener('load', () => {
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = 'something went wrong';
    }
  });
  //XMLHttpRequest properties:
  //status (404, 0, 403)
  //status text
  //response (this response is provided by the back-end developer)
  //response-text – didn't oserve in this lesson
  //readyState – keeps the current state of the request

  
})      