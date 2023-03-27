const inputEl = document.querySelector('input');
const lengthText = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', validatorInput);

function validatorInput() {
    const inputText = inputEl.value.trim();

    if (inputText.length === lengthText) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}