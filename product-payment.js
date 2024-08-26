document.querySelector('.js-product-page-zoom').addEventListener('mousemove', function(e) {
    const img = this.querySelector('.js-product-page-img');
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    img.style.transformOrigin = `${x}px ${y}px`;
});