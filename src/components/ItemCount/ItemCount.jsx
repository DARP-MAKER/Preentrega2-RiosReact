import React, { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);

  const agrega = () => {
    console.log(count + " productos al carrito");
    alert(count + " productos al carrito");
  };

  const resta = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {if (count < 10) {setCount(count + 1)}}}>+</button>
      <button onClick={resta}>-</button>
      <button onClick={agrega}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;


