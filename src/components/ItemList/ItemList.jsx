import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div>
      {products.length === 0 ? (
        <h1>Loading</h1>
      ) : (
          products.map((product, id) => (
          <Item key={id} product={product} />
        ))
      )}
    </div>
  );
};

export default ItemList;


