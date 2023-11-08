document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('botonCambio').addEventListener('click', cambiarColor);
});

function cambiarColor() {
  var elemento = document.getElementById('elementoCambiante');
  elemento.classList.toggle('color-nuevo');
}
