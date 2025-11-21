let count = 0;

const countDisplay = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
  countDisplay.textContent = count;
  countDisplay.style.color = count > 0 ? 'green' : count < 0 ? 'red' : '#1a73e8';
}

increaseBtn.addEventListener('click', function () {
  count = count + 1;
  updateDisplay();
});

decreaseBtn.addEventListener('click', function () {
  count = count - 1;
  updateDisplay();
});

resetBtn.addEventListener('click', function () {
  count = 0;
  updateDisplay();
});
