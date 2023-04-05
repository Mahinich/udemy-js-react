import {showModal, hideModal} from './modal';
import { postData } from '../services/services';

function formsToServer(formSelector ,modalTimerId) {
  const forms = document.querySelectorAll(formSelector);

  const message = { 
    success: 'Дякуємо, дані відправлені',
    loading: 'img/forms/spinner.svg',
    error: 'Виникла помилка',
  };

  forms.forEach(item => {
    bindPostData(item);
  });

    
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
        });

    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    showModal('.modal', modalTimerId);

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

      hideModal('.modal');
    }, 4000);
  }
}

export default formsToServer;
// module.exports = formsToServer