let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.js-carousel-item');
  const totalSlides = slides.length;

  slideIndex += n;

  if (slideIndex >= totalSlides) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  }

  updateSlidePosition();
  updateDots();
}

function currentSlide(n) {
  slideIndex = n;
  updateSlidePosition();
  updateDots();
}

function updateSlidePosition() {
  const slides = document.querySelectorAll('.js-carousel-item');
  const slideWidth = slides[0].offsetWidth;
  const offset = -slideIndex * slideWidth;
  document.querySelector('.js-carousel-img').style.transform = `translateX(${offset}px)`;
}

function updateDots() {
  const dots = document.querySelectorAll('.js-dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

window.addEventListener('resize', updateSlidePosition);

// indicators //

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.js-prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.js-next').addEventListener('click', () => moveSlide(1));

  document.querySelectorAll('.js-go-to-slide').forEach(button => {
    button.addEventListener('click', (event) => {
      const slideIndex = parseInt(event.target.dataset.slide);
      currentSlide(slideIndex);
    });
  });

  updateDots(); 
});

