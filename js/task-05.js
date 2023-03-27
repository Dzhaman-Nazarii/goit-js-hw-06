const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInput);

function onInput(event) {
  spanEl.textContent = inputEl.value.trim() || 'Anonymous';
}