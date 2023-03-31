/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calculator.js":
/*!**********************************!*\
  !*** ./js/modules/calculator.js ***!
  \**********************************/
/***/ ((module) => {

function calculator() {
  const result = document.querySelector('.calculating__result span');

  let sex = 'female', height, weight, age, ratio; 

  if (localStorage.getItem('sex') ) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio') ) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  function initLocalSettings(selector,  activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.classList.remove(activeClass);

      if (elem.getAttribute('id') === localStorage.getItem('sex') ) {
        elem.classList.add(activeClass);
      } else if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio') ) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '____'; 
      return;
    }

    if (sex === 'male') {
    result.textContent = Math.round( (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio );
    
    } else {
      result.textContent = Math.round( (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio );
    }
  }
  calcTotal();

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach(elem => {
      elem.addEventListener('click', () => {
        if (elem.getAttribute('data-ratio') ) {
          ratio = +elem.getAttribute('data-ratio');
          localStorage.setItem('ratio', +elem.getAttribute('data-ratio') );
        } else {
          sex = elem.getAttribute('id');
          localStorage.setItem('sex', elem.getAttribute('id') );
        }

        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
  
        elem.classList.add(activeClass);
  
        calcTotal();
      });
    });
  }

  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div ', 'calculating__choose-item_active');

  function getDinamicInfo(selector) {
    const input = document.querySelector(selector);


    input.addEventListener('input', () => {
      if (input.value.match(/\D/g) ) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }
      
      switch(input.getAttribute('id') ){
        case 'height':
          height = +input.value;
          break;
        case 'weight':  
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }

      calcTotal();
    });
  }

  getDinamicInfo('#height');
  getDinamicInfo('#weight');
  getDinamicInfo('#age');
}

module.exports = calculator;

/***/ }),

/***/ "./js/modules/forms-to-server.js":
/*!***************************************!*\
  !*** ./js/modules/forms-to-server.js ***!
  \***************************************/
/***/ ((module) => {

function formsToServer() {
  const forms = document.querySelectorAll('form');

  const message = { 
    success: 'Дякуємо, дані відправлені',
    loading: 'img/forms/spinner.svg',
    error: 'Виникла помилка',
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json' // no headers if to use FormData object instead of JSON
      }, 
      body: data
    });

    return await res.json();
  };

    
  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;
      // form.append(statusMessage);
      form.insertAdjacentElement('afterend', statusMessage);

      // FETCH METHOD

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries() ) );

      postData('http://localhost:3000/requests', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch(() => {
          showThanksModal(message.error);
        }).finally(() => {
          form.reset();
        })

    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    showModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('.modal__dialog');
    thanksModal.innerHTML = `
    <div class='modal__content'> 
      <div class='modal__close' data-close>&times;</div>
      <div class='modal__title'>${message}</div>
    </div>
    `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');

      hideModal();
    }, 4000);
  }
}

module.exports = formsToServer;

/***/ }),

/***/ "./js/modules/menu-cards.js":
/*!**********************************!*\
  !*** ./js/modules/menu-cards.js ***!
  \**********************************/
/***/ ((module) => {

function menuCards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, selector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(selector);
      this.course = 40;
      this.changeCurrency();
    }
    changeCurrency() {
      this.price = this.price * this.course;
    }
    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.element = 'menu__item';
        element.classList.add(this.element);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return res.json();
  };

/*   getResource(`http://localhost:3000/menu`)
    .then(data => {
      data.forEach(({img, altimg, title, descr, price}) => { //used object destructuring assignment
        new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
      });
    }); */

  getResource(`http://localhost:3000/menu`)
    .then(data => createCard(data));  

  function createCard(data) {
    data.forEach( ({img, altimg, title, descr, price}) => {
      const element = document.createElement('div');

      element.classList.add('menu__item');

      element.innerHTML = `
        <img src=${img} alt=${altimg}>
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr">${descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> грн/день</div>
        </div>
      `;

      document.querySelector('.menu .container').append(element);
    });  
  }
}

module.exports = menuCards;

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((module) => {

function modal() {
  const modalOpen = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  // const closeModal = document.querySelector('[data-close]');

  function showModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }
  
  modalOpen.forEach((item) => {
    item.addEventListener('click', showModal);
  });
  
  function hideModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
  
  // closeModal.addEventListener('click', hideModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      hideModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(); 
    }
  });

  //MODAL MODIFICATION 

  const modalTimerId = setTimeout(showModal, 50000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= 
      document.documentElement.scrollHeight - 1) {
        showModal();
        window.removeEventListener('scroll', showModalByScroll);
      }
  }
  
  window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((module) => {

function slider() {
  const slides      = document.querySelectorAll('.offer__slide'),
        slider      = document.querySelector('.offer__slider'),
        prev        = document.querySelector('.offer__slider-prev'),
        next        = document.querySelector('.offer__slider-next'),
        total       = document.querySelector('#total'),
        current     = document.querySelector('#current'),
        slidesWrap  = document.querySelector('.offer__slider-wrapper'),
        slidesInner = document.querySelector('.offer__slider-inner'),
        width       = window.getComputedStyle(slidesWrap).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length > 10 ) {
      total.textContent = slides.length;
      current.textContent = slideIndex;
    } else {
      total.textContent = `0${slides.length}`
      current.textContent = `0${slideIndex}`;
    }
  
  slidesInner.style.width = 100 * slides.length + '%';
  slidesInner.style.display = 'flex';
  slidesInner.style.transition = '0.8s all';
  
  slidesWrap.style.overflow = 'hidden';
  
  slides.forEach(slide => {
    slide.style.width = width;
  });
  
  slider.style.position = 'relative';

  const indicators = document.createElement('ol'),
        dots = [];

  indicators.classList.add('carousel-indicators');

  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
      dot.style.opacity = '1';
    }
    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, '');
  }
  
  next.addEventListener('click', () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesInner.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length > 10 ) {
        current.textContent = slideIndex;
      } else {
        current.textContent = `0${slideIndex}`;
      }
    
    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;  
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesInner.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length > 10 ) {
      current.textContent = slideIndex;
    } else {
      current.textContent = `0${slideIndex}`;
    }

    dots.forEach(dot => dot.style.opacity = '.5');
    dots[slideIndex - 1].style.opacity = 1;  
  });

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide-to');

      slideIndex = slideTo;
      offset = deleteNotDigits(width) * (slideTo - 1);

      slidesInner.style.transform = `translateX(-${offset}px)`;

      if (slides.length > 10 ) {
        current.textContent = slideIndex;
      } else {
        current.textContent = `0${slideIndex}`;
      }
      
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;  
    });
  });
}

module.exports = slider;

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((module) => {

function tabs() {
  
  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabsContent() {
    tabsContent.forEach( item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabsContent(i = 0) {
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabsContent();
  showTabsContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((module) => {

function timer() {
  const deadline = '2023-04-30';

  function getTimeRemaining(endtime) {
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
    
    if(t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60) % 24)),
      minutes = Math.floor((t / 1000 / 60) % 60 ),
      seconds = Math.floor((t / 1000) % 60);
      }
    return {
      total: t,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  function getZero(num) {
    if(num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
          days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds');
          timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);
}

module.exports = timer;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', () => {
  //MODULES PARTS

  const tabs = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js"),
        timer = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js"),
        modal = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js"),
        menuCards = __webpack_require__(/*! ./modules/menu-cards */ "./js/modules/menu-cards.js"),
        formsToServer = __webpack_require__(/*! ./modules/forms-to-server */ "./js/modules/forms-to-server.js"),
        slider = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js"),
        calculator = __webpack_require__(/*! ./modules/calculator */ "./js/modules/calculator.js");

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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map