window.addEventListener('DOMContentLoaded', () => {

  //TABS
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
  
  // TIMER
    
  const deadline = '2023-03-10';

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

  // MODAL

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

  // const modalTimerId = setTimeout(showModal, 50000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= 
      document.documentElement.scrollHeight - 1) {
        showModal();
        window.removeEventListener('scroll', showModalByScroll);
      }
  }
  
  window.addEventListener('scroll', showModalByScroll);

  // Use classes for cards

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
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

  // Forms to server 

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

  // SLIDER
  
  const slides  = document.querySelectorAll('.offer__slide'),
        prev    = document.querySelector('.offer__slider-prev'),
        next    = document.querySelector('.offer__slider-next'),
        total   = document.querySelector('#total'),
        current = document.querySelector('#current');
  let slideIndex = 1;

  showSlides(slideIndex);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if( n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex - 1].style.display = 'block';

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function shiftSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function() {
    shiftSlides(-1);
  });

  next.addEventListener('click', function() {
    shiftSlides(1);
  });
});