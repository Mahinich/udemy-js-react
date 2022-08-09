'use strict';

// let num = 50;

// while (num < 55) {
  // console.log(num);
  // ++num;
// }

// do {
  // console.log(num);
  // num++;
// } while (num < 49);

// for (let i = 1; i < 10; i++) {
//  if (num === 53) {
  // continue;
//  }
//  console.log(num);
//  num++;
// }

// let text = '';

// for (let i = 10; i <= 100; i += 10) {
  // text += `The number is ${i} <br/>`;
// }

// document.querySelector('p').innerHTML = text;


// const phones = ['iphone', 'oppo','a1', 'huawei', 'redmi 10'];
// 
// let i = 0,
  // len = phones.length,
  // text = '';

// for (; i < len; i++) {
//   text += `${phones[i]} <br/>`;
// }

// document.querySelector('p').innerHTML = text;

// for (; i < len; ) {
  // text += `${phones[i]} <br/>`;
  // i++;
// }
// 
// document.querySelector('p').innerHTML = text;

// for (let p = 0; p < 3; p++) {
//   // console.log(`${p} ${o}`);
//   for (let o = 0; o < 3; o++) {
//     console.log(`${p} ${o}`);
//   }
// }

// let result = '';
// let length = 9;

// for (let i = 1; i < length; i++) {
//   for (let j = 0; j < i; j++) {
//     result += '*';
//   }
//   result += '\n';
// }

// console.log(result);

// for (let line = "#"; line.length < 8; line += "#")
//   console.log(line);

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

// first: for (let i = 0; i < 3; i++)  {
//   console.log(`first level ${i}`);
//   for (let j = 0; j < 3; j++)  {
//     console.log(`second level ${j}`);
//     for (let k = 0; k < 5; k++)  {
//       if (k === 2) continue first;
//       console.log(`third level ${k}`);
//     }
//   }
// }