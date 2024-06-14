console.log('Script loaded');

const products = getAvailableProducts();
console.log(products);

const productsUl = document.querySelector('.products');

function renderProducts(products) {
  for (const product of products) {
    const { name, price, rating } = product;
    const newLi = document.createElement('li');
    newLi.innerHTML = `<h2>${name}</h2><span>price: ${price}</span><br><span>Rating: ${rating}</span>`;
    productsUl.appendChild(newLi);
  }
}

renderProducts(products);
