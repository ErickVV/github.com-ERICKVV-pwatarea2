document.addEventListener('DOMContentLoaded', function() {
  // Selecciona todos los elementos LI que contienen UL
  var menuItems = document.querySelectorAll('#navMenu > ul > li');

  for (var i = 0; i < menuItems.length; i++) {
    if(menuItems[i].querySelector('ul')) {
      // Establece el cursor para indicar que este ítem puede expandirse
      menuItems[i].style.cursor = 'pointer';
      
      // Añade un evento click al elemento LI
      menuItems[i].addEventListener('click', function() {
        // Este es el submenú relacionado al ítem de menú clickeado
        var submenu = this.querySelector('ul');

        // Mostrar/Ocultar el submenú
        if (submenu.style.display === 'block') {
          submenu.style.display = 'none';
        } else {
          submenu.style.display = 'block';
        }
      });
    }
  }
});
