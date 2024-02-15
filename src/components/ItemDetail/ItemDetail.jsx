import React from 'react';
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

export default ItemDetail;

   
