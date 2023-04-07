function hideModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function showModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';

  console.log(modalTimerId);
  
  if (modalTimerId) {
  clearInterval(modalTimerId);
  }
}

function modal(openSelector, modalSelector, modalTimerId) {
  const modalOpen = document.querySelectorAll(openSelector);
  const modal = document.querySelector(modalSelector);
  // const closeModal = document.querySelector('[data-close]');



  modalOpen.forEach((item) => {
    item.addEventListener('click', () => showModal(modalSelector, modalTimerId));
  });
  
  // closeModal.addEventListener('click', hideModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      hideModal(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      hideModal(modalSelector); 
    }
  });

  //MODAL MODIFICATION 

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= 
      document.documentElement.scrollHeight - 1) {
        showModal(modalSelector, modalTimerId);
        window.removeEventListener('scroll', showModalByScroll);
      }
  }
  
  window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export{showModal};
export{hideModal};
// module.exports = modal;