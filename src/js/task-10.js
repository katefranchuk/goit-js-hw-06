function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputEl = document.querySelector('input[type="number"]');
const boxContainerEl = document.querySelector('#boxes');

function createBoxes(amount) {
  
  let size = 30;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = size + 'px';
    boxEl.style.height = size + 'px';
    size += 10;
    boxContainerEl.append(boxEl);
  }

  inputEl.value = '';
}


function destroyBoxes() {
  boxContainerEl.innerHTML = '';
}

createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)));

destroyBtn.addEventListener('click', destroyBoxes);
