import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({ products }) => { 

  const [cart,setCart] = useState(false)

  const {addCart} = useContext(CartContext)

  const onAdd = (count) => {

    setCart(true)

    addCart(products,count)

    console.log(count)
  }

    

  return (
    <div>
      {products === null ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <img src={products.imageid} alt={products.title}/>
          <h2>{products.title}</h2>
          <h2>{products.description}</h2>
          <h2>{products.price}</h2>
          <h2>Stock: {products.stock}</h2>
          {cart ? <Link to={"/Cart"}>ir al carrito</Link> : <ItemCount stock={products.stock} initial={1} onAdd={onAdd}/>}
        </div>
      )}
    </div>
  );
};

export default ItemDetail;





/*import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        products.map((product, id) => (

          <div key={id}>
            <img src={product.imageid} alt={product.title}/>
            <h2>{product.tittle}</h2>
            <h2>{product.description}</h2>
            <h2>{product.price}</h2>
            <h2>stock {product.stock}</h2>
            <ItemCount stock={product.stock} initial={1} />
          </div>
        ))
      )}
    </div>
  );
};

export default ItemDetail;*/

   
