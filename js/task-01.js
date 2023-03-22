const categoriesList = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');

const quantityCategories = categoriesItems.length;
console.log(`Number of categories: ${quantityCategories}`);

categoriesItems.forEach((category) => {
  const categoriesName = category.querySelector('h2').textContent;
  const categoriesEl = category.querySelectorAll('li');
  console.log(`Category: ${categoriesName}`);
  console.log(`Elements: ${categoriesEl.length}`);
});