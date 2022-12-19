// 1 TASK
const categorieslistEl = document.querySelector('#categories');

function showNumberOfCategories(itemsList) {
  console.log(`Number of categories: ${itemsList.children.length}`);
}

showNumberOfCategories(categorieslistEl);

// 2 TASK

// 1 VERSION

// const categoryItemsEl = document.querySelectorAll('.item');

// for (const categoryItemEl of categoryItemsEl) {
//   console.log('Category:', categoryItemEl.querySelector('h2').textContent);
//   console.log('Elements:', categoryItemEl.querySelectorAll('li').length);
// }

// 2 VERSION

const categoryItemsEl = document.querySelectorAll('.item');
const itemsTitleEl = document.querySelectorAll('.item h2');
const listCategoryItemsEl = document.querySelectorAll('.item ul');

for (let i = 0; i < categoryItemsEl.length; i += 1) {
  console.log(`Category: ${itemsTitleEl[i].textContent}`);
  console.log(`Elements: ${listCategoryItemsEl[i].children.length}`);
}

