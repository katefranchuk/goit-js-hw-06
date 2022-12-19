const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];


const ingredientsListEl = document.querySelector('#ingredients');

const makeIngredientItems = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.classList.add('item');
    ingredientItemEl.textContent = ingredient;

    return ingredientItemEl;
  });
};

const elements = makeIngredientItems(ingredients);

ingredientsListEl.append(...elements);
