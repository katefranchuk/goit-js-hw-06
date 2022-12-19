function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const changeColorBtnEl = document.querySelector('.change-color');
const colorValueTextEl = document.querySelector('.color');

changeColorBtnEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  colorValueTextEl.textContent = color;
  
  bodyEl.style.backgroundColor = color;
});