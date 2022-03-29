import { useState, useEffect } from 'react';

const ItemCount = ( {stockInitial, stockAvailable, onAdd} ) => {

  console.log("INICIAL:" + stockInitial)
  console.log("CURRENT:" + stockAvailable)
  
  
  const [count, setCount] = useState(stockInitial);

  console.log("CONTADOR:" + count)

  const incrementItem = () => {
    stockAvailable > count ? setCount(count + 1) : alert('NO HAY STOCK DISPONIBLE');    
  }

  const decrementItem = () => {
    count > 0 ? setCount(count - 1) : alert('SELECCIONAR CANTIDADES POSITIVAS');  
    
  }

  const addItem = () => {
    count <= 0 ? alert('SELECCIONE UNA CANTIDAD VALIDA') : onAdd(count);
  }

  return(
    <div>
        <div className="d-grid gap-2 d-md-flex justify-content-center">
          <button onClick={decrementItem} className='btn btn-dark m-1'>-</button>
          <span>{ count }</span>
          <button onClick={incrementItem} className='btn btn-dark m-1'>+</button>
        </div>
        <div className='text-center'>
          <button onClick={addItem} className='btn btn-dark m-1'>AGREGAR AL CARRITO</button>
        </div>
        
        
       
    </div>
  );

};

export default ItemCount;
