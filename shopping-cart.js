

const prevButton = document.querySelector('.js-prev-card');
const nextButton = document.querySelector('.js-next-card');
const productContainer = document.querySelector('.js-can-interest-product');

let scrollAmount = 0;

prevButton.addEventListener('click', () => {
    scrollAmount -= productContainer.clientWidth / 5; 
    if (scrollAmount < 0) {
        scrollAmount = 0; 
    }
    productContainer.style.transform = `translateX(-${scrollAmount}px)`;
});

nextButton.addEventListener('click', () => {
    const maxScroll = productContainer.scrollWidth - productContainer.clientWidth;
    scrollAmount += productContainer.clientWidth / 5; 
    if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll; 
    }
    productContainer.style.transform = `translateX(-${scrollAmount}px)`;
});