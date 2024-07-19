let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  slideIndex += n;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  const offset = -slideIndex * 773; 
  document.querySelector('.carousel-img').style.transform = `translateX(${offset}px)`;

  updateDots();
}

/*indicadores*/
function currentSlide(n) {
  slideIndex = n;
  const offset = -slideIndex * 773;
  document.querySelector('.carousel-img').style.transform = `translateX(${offset}px)`;

  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[slideIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  updateDots();
});