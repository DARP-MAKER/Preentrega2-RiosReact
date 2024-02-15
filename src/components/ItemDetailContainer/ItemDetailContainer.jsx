import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';




const ItemDetailContainer = ({id}) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("./products.json");
            const data = await response.json();
            const foundProduct = data.find(products => products.id === id);
            setProducts([foundProduct]); 
          } catch (error) {
            console.log("error en el fetch" + error);
          }
        };
    
        fetchData();
      }, [id]);
      
    
  
  return (
    <div>
    <ItemDetail products={products}/>
    </div>
  );
};

export default ItemDetailContainer;




