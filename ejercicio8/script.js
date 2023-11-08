let slideIndex = 1;
const slideContainer = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const size = carouselImages[0].clientWidth;
slideContainer.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';

// Pasar a la siguiente imagen
nextBtn.addEventListener('click', () => {
  if (slideIndex >= carouselImages.length - 1) return;
  slideContainer.style.transition = "transform 0.4s ease-in-out";
  slideIndex++;
  slideContainer.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
});

// Regresar a la imagen anterior
prevBtn.addEventListener('click', () => {
  if (slideIndex <= 0) return;
  slideContainer.style.transition = "transform 0.4s ease-in-out";
  slideIndex--;
  slideContainer.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
});

// Volver al inicio o al final si se llega a los clones
slideContainer.addEventListener('transitionend', () => {
  if (carouselImages[slideIndex].id === 'lastClone') {
    slideContainer.style.transition = "none";
    slideIndex = carouselImages.length - 2;
    slideContainer.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
  }
  if (carouselImages[slideIndex].id === 'firstClone') {
    slideContainer.style.transition = "none";
    slideIndex = carouselImages.length - slideIndex;
    slideContainer.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
  }
});

// Automatización del carrusel
let playSlider;

const repeater = () => {
  playSlider = setInterval(function(){
    slideIndex++;
    slideContainer.style.transition = "transform 0.4s ease-in-out";
    slideContainer.style.transform = 'translateX(' + (-size * slideIndex) + 'px)';
  }, 3000); // Cambia cada 3 segundos
}

repeater();

// Parar el carrusel al interactuar con los botones
prevBtn.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

nextBtn.addEventListener('mouseover', () => {
  clearInterval(playSlider);
});

// Reiniciar el carrusel al dejar de interactuar con los botones
prevBtn.addEventListener('mouseout', () => {
  repeater();
});

nextBtn.addEventListener('mouseout', () => {
  repeater();
});
