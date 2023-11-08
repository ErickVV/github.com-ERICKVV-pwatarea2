function presionarBoton(valor) {
  document.getElementById('pantalla').value += valor;
}

function calcular() {
  var resultado = eval(document.getElementById('pantalla').value);
  document.getElementById('pantalla').value = resultado;
}

function limpiar() {
  document.getElementById('pantalla').value = '';
}
