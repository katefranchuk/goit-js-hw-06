const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const getValue = () => {
  valueEl.textContent = counterValue;
    if (!counterValue) {
      btnDecrementEl.setAttribute('disabled', '');
    } else {
      btnDecrementEl.removeAttribute('disabled', '');
    }
}

btnDecrementEl.addEventListener('click', () => {
  counterValue -= 1;
  getValue();
});
btnIncrementEl.addEventListener('click', () => {
  counterValue += 1;
  getValue();
});

// 2 VERSION

// const decrementValue = () => {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
//   if (!counterValue) {
//     btnDecrementEl.setAttribute('disabled', '');
//   }
// };

// const incrementValue = () => {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
//   if (counterValue > 0) {
//     btnDecrementEl.removeAttribute('disabled');
//   }
// };

// btnDecrementEl.addEventListener('click', decrementValue);
// btnIncrementEl.addEventListener('click', incrementValue);

// 3 VERSION

// const counterValue = {
//   value: 0,
//   decrement() {
//     this.value -= 1;
//   },
//   increment() {
//     this.value += 1;
//   },
// };

// btnDecrementEl.addEventListener('click', () => {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
//     if (!counterValue.value) {
//       btnDecrementEl.setAttribute('disabled', '');
//     }
// });

// btnIncrementEl.addEventListener('click', () => {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
//     if (counterValue.value > 0) {
//       btnDecrementEl.removeAttribute('disabled');
//     }
// });
