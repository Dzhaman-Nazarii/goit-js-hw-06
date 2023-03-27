let counterValue = 0;

const valueEl = document.querySelector('#value');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

function increment() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

function decrement() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}