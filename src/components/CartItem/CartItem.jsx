import React from 'react'

const CartItem = ({product,deleteCart}) => {
  return (
    <div>
        <h2>{product.product.tittle}</h2>

        <img src = {product.product.imageid} alt = {product.product.tittle}/>
        <p>cantidad: {product.count}</p>
        <p>valor unitario: ${product.product.price}</p>
        <p>valor total para esta referencia: ${product.product.price*product.count}</p>
        <button onClick={()=> deleteCart(product.product.id)}>eliminar producto</button>
    </div>
  )
}

export default CartItem;
