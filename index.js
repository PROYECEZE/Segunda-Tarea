let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel__item');
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
  const slides = document.querySelectorAll('.carousel__item');
  const slideWidth = slides[0].offsetWidth;
  const offset = -slideIndex * slideWidth;
  document.querySelector('.carousel__img').style.transform = `translateX(${offset}px)`;
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

window.addEventListener('resize', updateSlidePosition);

// indicators //

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === slideIndex);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
  document.querySelector('.next').addEventListener('click', () => moveSlide(1));

  document.querySelectorAll('.js-go-to-slide').forEach(button => {
    button.addEventListener('click', (event) => {
      const slideIndex = parseInt(event.target.dataset.slide);
      currentSlide(slideIndex);
    });
  });

  updateDots(); 
});

// Width of each card plus gap

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.categories__products-shoppings');
  const slideWidth = document.querySelector('.card__baner').offsetWidth + 24.98; 
  let currentPosition = 0;

  document.querySelectorAll('.js-moved-slide').forEach(button => {
    button.addEventListener('click', function() {
      const direction = parseInt(this.getAttribute('data-direction'));
      const maxPosition = (slides.children.length - 4) * slideWidth;

      if (direction === -1) {
        currentPosition -= slideWidth;
        if (currentPosition < 0) {
          currentPosition = maxPosition;
        }
      } else {
        currentPosition += slideWidth;
        if (currentPosition > maxPosition) {
          currentPosition = 0;
        }
      }

      slides.style.transform = `translateX(-${currentPosition}px)`;
    });
  });
});