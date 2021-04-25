const displayCounter = document.querySelector(".displayCounter");
const increase = document.querySelector(".btnIncrease");
const reset = document.querySelector(".btnReset");
const decrease = document.querySelector(".btnDecrease");

increase.addEventListener("click", increaseCounter);
decrease.addEventListener("click", decreaseCounter);
reset.addEventListener("click", resetCounter);

let count = 0;

function increaseCounter() {
  count++;
  displayCounter.innerHTML = count;
}

function decreaseCounter() {
  count--;
  displayCounter.innerHTML = count;
}

function resetCounter() {
  count = 0;
  displayCounter.innerHTML = 0;
}
