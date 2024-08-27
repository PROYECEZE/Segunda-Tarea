
document.querySelector('.js-product-page-zoom').addEventListener('mousemove', function(e) {
    const img = this.querySelector('.js-product-page-img');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    img.style.transformOrigin = `${x}px ${y}px`;
});

  //Select the items
  const decreaseBtn = document.querySelector('.js-product-page-decrease');
  const increaseBtn = document.querySelector('.js-product-page-increase');
  const quantityInput = document.querySelector('.js-product-page-quantity');

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
      quantityInput.value = "---";
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
