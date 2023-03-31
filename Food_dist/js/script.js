window.addEventListener('DOMContentLoaded', () => {
  //MODULES PARTS

  const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        modal = require('./modules/modal'),
        menuCards = require('./modules/menu-cards'),
        formsToServer = require('./modules/forms-to-server'),
        slider = require('./modules/slider'),
        calculator = require('./modules/calculator');

  //TABS
  tabs();
  // TIMER
  timer();    
  // MODAL
  modal();
  // Use classes for cards
  menuCards();
  // Forms to server 
  formsToServer();
  // SLIDER
  slider();  
  // Calculator
  calculator();  
});