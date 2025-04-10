const products = [{ 
  Image: '/assets/img/sample.png',
  name: 'sample',
  rating: {
    stars: 0,
    count: 20
  },
  priceCents: 1090
}, 
{ 
  Image: '/assets/img/sample.png',
  name: 'sample',
  rating: {
    stars: 4,
    count: 20
  },
  priceCents: 1090
}, 
{ 
  Image: '/assets/img/sample.png',
  name: 'sample',
  rating: {
    stars: 3,
    count: 20
  },
  priceCents: 1090
},
{ 
  Image: '/assets/img/sample.png',
  name: 'sample',
  rating: {
    stars: 3,
    count: 20
  },
  priceCents: 1090
},
{ 
  Image: '/assets/img/sample.png',
  name: 'sample',
  rating: {
    stars: 3,
    count: 20
  },
  priceCents: 1090
},
{ 
  Image: '/assets/img/sample.png',
  name: 'sample',
  rating: {
    stars: 3,
    count: 20
  },
  priceCents: 1090
}]; 

let productsHtml = '';

products.forEach((product) => {
  const html = `
    <div class="product-container js-product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.Image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars" src="/assets/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count} 
        </div>
      </div>

      <div class="product-price">
        ${(product.priceCents / 100).toFixed(2)} €
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="assets/img/sample.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `;
  productsHtml += html;
});

const productsContainer = document.querySelector('.js-products-grid');
productsContainer.innerHTML = productsHtml;




