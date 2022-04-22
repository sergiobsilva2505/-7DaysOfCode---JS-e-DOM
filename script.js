
const form = document.querySelector('.js-form');
const inputName = document.querySelector('.js-field-name');
const inputBirthDate = document.querySelector('.js-field-birth-date');

form.addEventListener('submit', function (event) {

    console.log('Nome: ' + inputName.value + "\n" + "Data nascimento: " + inputBirthDate.value);

    event.preventDefault();
})

