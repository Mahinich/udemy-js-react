import tabs from './modules/tabs';
import timer from './modules/timer';
import calculator from './modules/calculator';
import slider from './modules/slider' ;
import formsToServer from './modules/forms-to-server';
import menuCards from './modules/menu-cards';
import modal from './modules/modal';
import { showModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => showModal('.modal', modalTimerId), 50000);

  /* const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        menuCards = require('./modules/menu-cards'),
        formsToServer = require('./modules/forms-to-server'),
        slider = require('./modules/slider'),
        calculator = require('./modules/calculator'); */

  //TABS
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  // TIMER
  timer('.timer', '2023-04-30');    
  // MODAL
  modal('[data-modal]', '.modal', modalTimerId);
  // Use classes for cards
  menuCards();
  // Forms to server 
  formsToServer('form', modalTimerId);
  // SLIDER
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    total: '#total',
    current: '#current',
    wrap: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });  
  // Calculator
  calculator();  
});