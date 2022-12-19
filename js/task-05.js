const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

const onInputChange = event => {
  if (!event.currentTarget.value) {
    return (outputEl.textContent = 'Anonymous');
  } else {
    return (outputEl.textContent = event.currentTarget.value);
  }
};

inputEl.addEventListener('input', onInputChange);


