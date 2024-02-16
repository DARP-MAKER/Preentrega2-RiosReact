import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    
    <Link to={`/item/${product.id}`}> 

      <div key={product.id} className='container'>
      <img src={product.imageid} alt={product.tittle}/>
      <h2>{product.tittle}</h2>
      <h2>{product.description}</h2>
      <h2>{product.price}</h2>
      </div>

    </Link>

    
  );
};

export default Item;
