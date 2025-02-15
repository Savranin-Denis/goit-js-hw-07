console.log('Завдання 1');

const listCategories = document.querySelector('#categories');

const numberOfCategories = listCategories.querySelectorAll('li.item').length;

console.log(`Number of categories: ${numberOfCategories}`);

const categories = listCategories.querySelectorAll('li.item');

categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  console.log(`Category: ${categoryName}`);

  const categoryItems = category.querySelectorAll('ul li').length;
  console.log(`Elements: ${categoryItems}`);
});

console.log('\n');
