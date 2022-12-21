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
    
  const deadline = '2022-12-17';

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

  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('[data-close]');
  const modalOpen = document.querySelectorAll('[data-modal]');

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
  
  closeModal.addEventListener('click', hideModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      hideModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(); 
    }
  });

  //MODAL MODIFICATION 

  const modalTimerId = setTimeout(showModal, 5000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= 
      document.documentElement.scrollHeight - 1) {
        showModal();
        window.removeEventListener('scroll', showModalByScroll);
      }
  }
  
  window.addEventListener('scroll', showModalByScroll);
});
