window.addEventListener('DOMContentLoaded', () => {
  const cookieStorage = {
    getItem: (key) => {
      const cookies = document.cookie.split(';')
                                     .map(cookie => cookie.split('='))
                                     .reduce((acc, [key, value]) => ({...acc,
                                                         [key.trim()] : value}), {});
      return cookies[key];
    },
    setItem: (key, value) => {
      document.cookie = `${key}=${value};expires=Sun, 16 July 4023 06:55:04 GTM`;
    }
  };
  
  const storageType = cookieStorage;
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