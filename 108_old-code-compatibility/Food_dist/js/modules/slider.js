function slider({container, slide, prevArrow, nextArrow, total, current, wrap, field}) {
  const slides      = document.querySelectorAll(slide),
        slider      = document.querySelector(container),
        prev        = document.querySelector(prevArrow),
        next        = document.querySelector(nextArrow),
        totalCounter       = document.querySelector(total),
        currentCounter     = document.querySelector(current),
        slidesWrap  = document.querySelector(wrap),
        slidesInner = document.querySelector(field),
        width       = window.getComputedStyle(slidesWrap).width;

  let slideIndex = 1;
  let offset = 0;

  if (slides.length > 10 ) {
      totalCounter.textContent = slides.length;
      currentCounter.textContent = slideIndex;
    } else {
      totalCounter.textContent = `0${slides.length}`
      currentCounter.textContent = `0${slideIndex}`;
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
        currentCounter.textContent = slideIndex;
      } else {
        currentCounter.textContent = `0${slideIndex}`;
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
      currentCounter.textContent = slideIndex;
    } else {
      currentCounter.textContent = `0${slideIndex}`;
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
        currentCounter.textContent = slideIndex;
      } else {
        currentCounter.textContent = `0${slideIndex}`;
      }
      
      dots.forEach(dot => dot.style.opacity = '.5');
      dots[slideIndex - 1].style.opacity = 1;  
    });
  });
}

export default slider;
// module.exports = slider;