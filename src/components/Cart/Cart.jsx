import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, emptyCart, deleteCart } = useContext(CartContext);

  // Función para calcular el valor total de la compra
  const calculateTotal = () => {
    let total = 0;
    cart.forEach((p) => {
      total += p.product.price * p.count;
    });
    return total;
  };

  return (
    <div>
      {cart.length === 0 ? (
        <>
          <h1>Sin productos en el Carrito</h1>
          <Link to="/">Volver al inicio</Link>
        </>
      ) : (
        <>
          <h1>Lista de carro</h1>
          {cart.map((p) => (
            <CartItem key={p.product.id} product={p} deleteCart={deleteCart} />
          ))}
          <p>Total a pagar: ${calculateTotal()}</p>
          <button onClick={emptyCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;







/*import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const {cart,emptyCart,deleteCart,totalCart} = useContext (CartContext)


  return (
    <div>
        {cart.length == 0 ?

        <>
        <h1>sin productos en el Carrito</h1>
        <Link to={"/"}>Volver al inicio</Link>
        </>

        :

        <>
        <h1>lista de carro</h1>

        {cart.map((p) =>(
         <CartItem key ={p.product.id} product = {p} deleteCart={deleteCart}/>
        ))}

        <p>total: ${totalCart()}</p>

        <button onClick={emptyCart}>vaciar carrito</button>
        
        </>

      }
        
    </div>
  );
};

export default Cart;*/
