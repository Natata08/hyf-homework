console.log('Script loaded');

const products = getAvailableProducts();

const productsEl = document.querySelector('.products-container');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  showPricesInInputs(getMinMaxPrices(products));
});

function renderProducts(products) {
  productsEl.innerHTML = '';
  const newUl = document.createElement('ul');
  for (const product of products) {
    const { name, price, rating } = product;
    const newLi = document.createElement('li');
    newLi.innerHTML = `<h2>${name}</h2><span>price: ${price} kr</span><br><span>Rating: ${rating}</span>`;
    newUl.appendChild(newLi);
  }
  productsEl.appendChild(newUl);
}

//filter
document.getElementById('filter-btn').addEventListener('click', filterProducts);
minPriceInput.addEventListener('blur', handlePriceInput);
maxPriceInput.addEventListener('blur', handlePriceInput);

function getMinMaxPrices(products) {
  let minPrice = products[0].price;
  let maxPrice = products[0].price;
  products.forEach(({ price }) => {
    if (price < minPrice) minPrice = price;
    if (price > maxPrice) maxPrice = price;
  });
  return { minPrice, maxPrice };
}

function showPricesInInputs(minMaxPrices) {
  const { minPrice, maxPrice } = minMaxPrices;
  minPriceInput.min = minPrice;
  maxPriceInput.max = maxPrice;
  minPriceInput.value = minPrice;
  maxPriceInput.value = maxPrice;
}
function handlePriceInput() {
  const { minPrice, maxPrice } = getMinMaxPrices(products);
  const minPriceInputInt = parseInt(minPriceInput.value);
  const maxPriceInputInt = parseInt(maxPriceInput.value);

  if (minPriceInputInt < minPrice || minPriceInputInt > maxPrice) {
    minPriceInput.value = minPrice;
  }
  if (maxPriceInputInt > maxPrice || maxPriceInputInt < minPrice) {
    maxPriceInput.value = maxPrice;
  }
}

function getFilteredProducts(minPrice, maxPrice) {
  return products.filter(({ price }) => price >= minPrice && price <= maxPrice);
}

function filterProducts() {
  minUserPrice = +minPriceInput.value;
  maxUserPrice = +maxPriceInput.value;
  const filteredProducts = getFilteredProducts(minUserPrice, maxUserPrice);
  if (filteredProducts.length === 0) {
    const message = document.createElement('p');
    message.innerText =
      'No products found. Try adjusting your filters to find what you are looking for.';
    productsEl.append(message);
  }
  renderProducts(filteredProducts);
}

//search
const debounce = (fn, delay = 1000) => {
  let timerId = null;
  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => fn(), delay);
  };
};

const onInput = debounce(searchProducts, 1000);

document.getElementById('search-input').addEventListener('input', () => {
  onInput();
});

function searchProducts() {
  const keyword = document.getElementById('search-input').value.trim();
  const foundProducts = filterProductsByName(products, keyword);
  renderProducts(foundProducts);
}

function filterProductsByName(products, keyword) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

//sorting
