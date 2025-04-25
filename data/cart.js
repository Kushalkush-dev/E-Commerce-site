
export let cart=JSON.parse(localStorage.getItem('cart')) || []


export function addToCart(productId){
  let matchingitem;
  cart.forEach((item)=>{

    if(productId===item.ProductId){
      matchingitem=item;
    }
  })

  if(matchingitem){
    matchingitem.quantity+=1
  }else{
    cart.push({
      ProductId:productId,
      quantity:1
    })
    
  }

  saveToStorage();

}



export function deletecartitem(productId){

  const newcart=[];

    cart.forEach((item)=>{
      if(item.ProductId!==productId){
        newcart.push(item);
      }

    })

    cart=newcart;

    
    saveToStorage();
}



 export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}