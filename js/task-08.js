const form = document.querySelector('.login-form');

form.addEventListener('submit', validForm);

function validForm(event) {
    event.preventDefault();

    const email = form.elements.email.value;
    const password = form.elements.email.password;

    if (email === '' || password === '') {
        alert('Заповніть всі поля');
    } else {
        const userData = {
            email: email,
            password: password,
        };
        console.log(userData);
        form.reset();
    }
}