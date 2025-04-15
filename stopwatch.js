let minutes = 0, seconds = 0, milliseconds = 0;
let timer = null;
let isRunning = false;

const minElement = document.getElementById('minutes');
const secElement = document.getElementById('seconds');
const msElement = document.getElementById('milliseconds');

const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

// Start
startBtn.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(updateTime, 10);
  }
});

// Pause
pauseBtn.addEventListener('click', () => {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
  }
});

// Reset
resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
});

// Timer logic
function updateTime() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  minElement.textContent = formatTime(minutes);
  secElement.textContent = formatTime(seconds);
  msElement.textContent = formatTime(milliseconds);
}

function formatTime(unit) {
  return unit < 10 ? '0' + unit : unit;
}
