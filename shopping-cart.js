

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


//Select the items
const decreaseBtn = document.querySelector('.js-purchase-summary-decrease');
const increaseBtn = document.querySelector('.js-purchase-summary-increase');
const quantityInput = document.querySelector('.js-purchase-summary-quantity');

// Initialize input
let initialQuantity = null;
// Function to decrease the quantity
decreaseBtn.addEventListener('click', () => {
  if (initialQuantity === null) {
    initialQuantity = 1;
  }

  let currentValue = parseInt(quantityInput.value || initialQuantity);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  } else {
    quantityInput.value = "0";
    initialQuantity = null;
  }
});

// Function to increase the quantity
increaseBtn.addEventListener('click', () => {
  if (initialQuantity === null) {
    initialQuantity = 1;
    quantityInput.value = initialQuantity;
  } else {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }
});
