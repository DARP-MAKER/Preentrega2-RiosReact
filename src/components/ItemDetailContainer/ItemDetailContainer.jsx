import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const [products, setProducts] = useState([]);

    const {id} = useParams ()
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("/products.json");
            const data = await response.json();
            const foundProduct = data.find((products) => products.id === parseInt(id));
            setProducts(foundProduct); 
          } catch (error) {
            console.log("error en el fetch" + error);
          }
        };
    
        fetchData();
      }, []);
      
    
  
  return (
    <div>
    <ItemDetail products={products}/>
    </div>
  );
};

export default ItemDetailContainer;





