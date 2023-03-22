const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList = 'item';
  ingredientsList.appendChild(ingredientsItem);
});