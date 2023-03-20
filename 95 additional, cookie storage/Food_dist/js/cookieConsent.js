window.addEventListener('DOMContentLoaded', () => {
  const storageType = localStorage;
  const consentPropertyType = 'site_consent';
  
  const hasConsented = () => storageType.getItem(consentPropertyType) === 'true' ? true : false;
  const toggleToStorage = (prop) => storageType.setItem(consentPropertyType, prop);

  const popup = document.querySelector('.popup'),
        btnConfirm = popup.querySelector('[data-confirm]'),
        btnDecline = popup.querySelector('[data-decline]');
  
  if (hasConsented()) {
    console.log('Loading...');
  } else {
    popup.classList.add('popup_active');
  }

  btnConfirm.addEventListener('click', () => {
    toggleToStorage(true);
    popup.classList.remove('popup_active');
    console.log('Loading...');
  });

  btnDecline.addEventListener('click', () => { 
    toggleToStorage(false);
    popup.classList.remove('popup_active');
  });
});