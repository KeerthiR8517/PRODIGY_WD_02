let seconds = 0;
let tens = 0;
let getSeconds = document.querySelector('.seconds');
let getTens = document.querySelector('.tens');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click', () => {
    interval = setInterval(startTimer, 10);
});

btnStop.addEventListener('click', () => {
    clearInterval(interval);
});

btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = 0;
    seconds = 0;
    getSeconds.innerHTML = '00';
    getTens.innerHTML = '00';
});

function startTimer() {
    tens++;
    if (tens < 10) {
        getTens.innerHTML = '0' + tens;
    } else if (tens >= 10 && tens <= 99) {
        getTens.innerHTML = tens;
    } else {
        seconds++;
        getSeconds.innerHTML = seconds < 10 ? '0' + seconds : seconds;
        tens = 0;
        getTens.innerHTML = '00';
    }
}
