import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log("error en el fetch" + error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>{greeting}</p>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
