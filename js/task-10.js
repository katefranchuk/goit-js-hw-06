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

  const boxesArr = [];
  const step = 10;

  for (let i = 0; i < amount; i += 1) {
    const newSize = size + boxContainerEl.children.length * step + i * step;
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = newSize + 'px';
    boxEl.style.height = newSize + 'px';
  
    boxesArr.push(boxEl);
  }

  boxContainerEl.append(...boxesArr);

  inputEl.value = '';
}

function destroyBoxes() {
  boxContainerEl.innerHTML = '';
}

createBtn.addEventListener('click', () => createBoxes(Number(inputEl.value)));

destroyBtn.addEventListener('click', destroyBoxes);
