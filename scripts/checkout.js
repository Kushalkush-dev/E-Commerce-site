import {cart,deletecartitem} from "../data/cart.js";
import {products} from "../data/products.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import {deliveryOptions} from "../data/deliveryOptions.js";


let carthtml='';

cart.forEach((item)=>{
  const productid=item.ProductId;
  let matchingProduct;

  products.forEach((product)=>{
    if(product.id===productid){

      matchingProduct=product;

    }

  })

  
  const deliveryoptioncartid=item.deliveryOptionId;
  let matchingoption;
  deliveryOptions.forEach((option)=>{
    if(option.id===deliveryoptioncartid){
      matchingoption=option;
    }
  })

      const todayday=dayjs()
      const dateDelivery=todayday.add(matchingoption.deliverydays,'days')
      const dateString=dateDelivery.format('MMMM, dddd, D')
      

  carthtml+=`<div class="cart-item-container js-container-${matchingProduct.id}">
  <div class="delivery-date">
    Delivery date: ${dateString}
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
     ${deliveryOptionsHtml(matchingProduct,item)}
    </div>
  </div>
</div>`


})

document.querySelector(".js-order-summary").innerHTML=carthtml;


function deliveryOptionsHtml(matchingProduct,item){

  let html=' ';

  deliveryOptions.forEach((option)=>{
    const todayday=dayjs()
    const dateDelivery=todayday.add(option.deliverydays,'days')
    const dateString=dateDelivery.format('MMMM, dddd, D')
    
    const deliveryCharge=option.price === 0 ? 'Free': `₹${option.price}`

    const ischecked=option.id===item.deliveryOptionId;

  html+=
  `<div class="delivery-option">
        <input type="radio" ${ischecked ? 'checked': ''}
          class="delivery-option-input"
          name=${matchingProduct.id}>
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${deliveryCharge} - Shipping
          </div>
        </div>
      </div>`    


  })

  return html;

}



document.querySelectorAll(".js-delete-link").forEach((link)=>{
  link.addEventListener("click",()=>{
    const productid=link.dataset.productId
    deletecartitem(productid)
    const container= document.querySelector(`.js-container-${productid}`)
    container.remove()


  })

})

 


