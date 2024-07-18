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
  document.querySelector('.carousel').style.transform = `translateX(${offset}px)`;
}