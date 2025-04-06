export const cart=[];

export function addToCart(productId){
  let matchingitem;
  cart.forEach((item)=>{

    if(productId===item.ProductId){
      matchingitem=item
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

}