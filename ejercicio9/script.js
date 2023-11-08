
const countdownDate = new Date("Dec 31, 2023 23:59:59").getTime();

const countdownFunction = setInterval(function() {
  const now = new Date().getTime();
  const timeleft = countdownDate - now;
  
  // Calculando días, horas, minutos y segundos
  const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
  

  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
  
  // Cuando el contador llegue a cero
  if (timeleft < 0) {
    clearInterval(countdownFunction);
    document.getElementById("timer").innerText = "¡Tiempo Finalizado!";
  }
}, 1000);
