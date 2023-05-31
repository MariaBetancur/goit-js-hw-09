function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let timerId = null;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
  }, 1000);
});

stopButton.addEventListener('click', () => {
  clearInterval(timerId);
  startButton.disabled = false;
});
