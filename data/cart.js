export const cart=[{
  ProductId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:1
},
{
  ProductId:"54e0eccd-8f36-462b-b68a-8182611d9add",
  quantity:3
}

];

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