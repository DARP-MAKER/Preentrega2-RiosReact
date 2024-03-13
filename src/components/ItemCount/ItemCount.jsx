import React, { useState } from "react";

function ItemCount({initial, stock, onAdd}) {
  const [count, setCount] = useState(0);

  const agrega = () => {

    onAdd(count)
    /*console.log(count + " productos al carrito");
    alert(count + " productos al carrito");*/
  };

  const resta = () => {

    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={resta}>-</button>
      <button onClick={agrega}>Agregar al carrito</button>
      <button onClick={() => {if (count < stock) {setCount(count + 1)}}}>+</button>
    </div>
  );
}

export default ItemCount;


