const formEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('input[type=email]');
const inputPasswordEl = document.querySelector('input[type=password]');

formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();

  if (inputEmailEl.value.trim() === '' || inputPasswordEl.value.trim() === '') {
    alert('Fill in all fields, please!');
  } else {
    const userData = {
      email: formEl.elements.email.value.trim(),
      password: formEl.elements.password.value.trim(),
    };
    console.log(userData);
    formEl.reset();
  }
}

