import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext';


const CarWidget = () => {

  const {quantityCart} = useContext(CartContext)

  return (
    <div>

        <img src="./public/carrito.png" alt="carrito de compras" />

        <p>{quantityCart() == 0 ? null : quantityCart()}</p>

    </div>
  )
}

export default CarWidget;