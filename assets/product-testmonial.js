const img  = document.querySelector('.slider-image');
const productTestmonial = document.getElementsByClassName("product-testmonial")[0];
productTestmonial.style.height = `${parseInt((document.body.offsetWidth * img.height)/ img.width)}px`;

