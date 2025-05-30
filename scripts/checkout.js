import {cart,deletecartitem} from "../data/cart.js";
import {products} from "../data/products.js";


let carthtml='';

cart.forEach((item)=>{
  const productid=item.ProductId;
  let matchingProduct;

  products.forEach((product)=>{
    if(product.id===productid){

      matchingProduct=product;

    }

  })

  carthtml+=`<div class="cart-item-container js-container-${matchingProduct.id}">
  <div class="delivery-date">
    Delivery date: Tuesday, June 21
  </div>

  <div class="cart-item-details-grid">
    <img class="product-image"
      src="${matchingProduct.image}">

    <div class="cart-item-details">
      <div class="product-name">
        ${matchingProduct.name}
      </div>
      <div class="product-price">
        ₹${matchingProduct.price}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${item.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
          Delete
        </span>
      </div>
    </div>

    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      <div class="delivery-option">
        <input type="radio" checked
          class="delivery-option-input"
          name=${matchingProduct.id}>
        <div>
          <div class="delivery-option-date">
            Tuesday, June 21
          </div>
          <div class="delivery-option-price">
            FREE Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name="${matchingProduct.id}">
        <div>
          <div class="delivery-option-date">
            Wednesday, June 15
          </div>
          <div class="delivery-option-price">
            $4.99 - Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio"
          class="delivery-option-input"
          name=${matchingProduct.id}>
        <div>
          <div class="delivery-option-date">
            Monday, June 13
          </div>
          <div class="delivery-option-price">
            $9.99 - Shipping
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`


})



document.querySelector(".js-order-summary").innerHTML=carthtml;



document.querySelectorAll(".js-delete-link").forEach((link)=>{
  link.addEventListener("click",()=>{
    const productid=link.dataset.productId
    deletecartitem(productid)
    const container= document.querySelector(`.js-container-${productid}`)
    container.remove()


  })

})

 




