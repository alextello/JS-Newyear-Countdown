const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Background proximo anio
year.innerHTML = currentYear;

// Actualiza la cuenta regresiva
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;
    /* 1000 para pasar de milisegundos a segundos, 60 minutos, 60 segundos */
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// muestra el spinner antes de iniciar cuenta regresiva
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);

setInterval(updateCountdown, 1000);
