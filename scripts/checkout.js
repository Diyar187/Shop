import {cart, removeFromCart} from './cart.js';
import {products} from './productData.js';

let cartSummaryHtml = '';

cart.forEach((cartItem) => {
const productId = cartItem.productId;

let matchingProduct;

products.forEach((product) => {
if (product.id === productId) {
  matchingProduct = product;
}
});
cartSummaryHtml += `
    <div class="cart-item 
    js-cart-item-container-${matchingProduct.id}">
      <div class="cart-item-image">
        <input type="checkbox" id="item-1" name="item-1" checked>
        <div class="image-gallery">
          <img src="${matchingProduct.image}" alt="Produktbild 1">
        </div>
      </div>
      <div class="cart-item-details">
        <h3 class="product-title">${matchingProduct.name}</h3>
        <p class="seller">Verkäufer: Lorem ipsum</p>
        <p class="shipping"><strong>GRATIS Lieferung</strong> 10. - 11. Apr.</p>
        <div class="cart-item-actions">
          <button class="button-icon">
            <i class="fa-solid fa-trash"></i>
            <span class="visually-hidden">Löschen</span>
          </button>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
          </div>
          <div class="cart-item-buttons">
            <button class="button-text js-delete-link" data-product-id=${matchingProduct.id}>Löschen</button>
            <button class="button-text">Auf die Merkliste</button>
            <button class="button-text">Teilen</button>
          </div>
        </div>
      </div>
      <div class="cart-item-price">
        <span class="price">${(matchingProduct.priceCents / 100).toFixed(2)} €</span>
      </div>
    </div>
  `
});

document.querySelector('.js-order-summary').innerHTML = cartSummaryHtml;

document.querySelectorAll('.js-delete-link').forEach((link) => {  
  link.addEventListener('click', () => {
    const productId = link.dataset.productId;
    removeFromCart(productId);
    const container = document.querySelector(`.js-cart-item-container-${productId}`);
    container.remove();
  });
});