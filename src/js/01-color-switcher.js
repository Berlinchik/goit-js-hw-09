const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;
stopBtn.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerId = 0;

startBtn.addEventListener('click', changeColor);

function changeColor() {
  stopBtn.disabled = false;
  startBtn.disabled = true;
  timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
  }, 1000);
}

stopBtn.addEventListener('click', stopChangeColor);

function stopChangeColor() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerId);
}
