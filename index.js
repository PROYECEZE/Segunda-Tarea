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
    dot.classList.toggle('dot--active', index === slideIndex);
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

// Width of each card plus gap //

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector('.js-categories-products-shoppings');
  const slideWidth = document.querySelector('.js-categories-card').offsetWidth + 24.98; 
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


// carousel of icons//

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.js-functionality-carousel');
  const icons = document.querySelectorAll('.js-functionality-icons');
  const indicators = document.querySelectorAll('.js-carousel-indicator');
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('carousel__indicator--active', i === index);
    });
  }

  document.querySelector('.js-carousel-prev').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : icons.length - 1;
    showSlide(currentIndex);
  });

  document.querySelector('.js-carousel-next').addEventListener('click', () => {
    currentIndex = (currentIndex < icons.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
  });

  showSlide(currentIndex);
});