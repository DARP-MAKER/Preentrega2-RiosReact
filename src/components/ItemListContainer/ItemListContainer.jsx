import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id: categoryid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();

        let filteredProducts = [];

        if (categoryid === 'new') {
          
          filteredProducts = data.filter(p => p.new === "new");
        } else if (categoryid) {
          
          filteredProducts = data.filter(p => p.categoryid === categoryid);
        } else {
          
          filteredProducts = data;
        }

        setProducts(filteredProducts);
      } catch (error) {
        console.log("error en el fetch" + error);
      }
    };

    fetchData();
  }, [categoryid]);

  console.log(categoryid);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

