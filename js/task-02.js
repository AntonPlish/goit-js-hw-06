const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = document.querySelector('#ingredients');

const arrayIngredients = ingredients.map(ingredient => {
  const itemIngredient = document.createElement('li');
  itemIngredient.textContent = ingredient;
  itemIngredient.classList.add('item');
  return itemIngredient;
});

listItems.append(...arrayIngredients);
console.log(arrayIngredients);