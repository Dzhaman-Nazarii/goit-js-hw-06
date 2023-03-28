const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

text.style.fontSize = inputEl.value + 'px';

inputEl.addEventListener('input', changeStyle);

function changeStyle() {
    textEl.style.fontSize = `${inputEl.value}px`;
}