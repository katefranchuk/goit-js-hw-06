const inputEl = document.querySelector('#validation-input');

const updateClas = (firstClass, secondClass) => {
  inputEl.classList.add(firstClass);
  inputEl.classList.remove(secondClass);
}

const checkInputValidation = (event) => {
  if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
    updateClas('valid', 'invalid');
  } else {
    updateClas('invalid', 'valid');
  }
}

inputEl.addEventListener('blur', checkInputValidation);