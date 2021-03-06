import './itemdetail.css'
import { Link } from 'react-router-dom';
import ItemCount from '../Itemcount/ItemCount';
import { useState, useContext } from 'react';
import ItemOption from '../ItemOption/ItemOption';
import CartContext from '../../context/CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({id, name, img, cat, price, desc, stock}) => {
  const { addItem, isInCart } = useContext(CartContext)

  const [ size, setSize ] = useState('S')
  const sizes = [ {id: 0, name: 'S'}, {id: 1, name: 'M'}, {id: 2, name: 'L'} ];

  const [ color, setColor ] = useState('Negro')
  const colors = [ {id: 0, name: 'Negro'}, {id: 1, name: 'Blanco'}, {id: 2, name: 'Azul'} ];
  
  const handleSize = (id) => {
    setSize(id)  
  }

  const handleColor = (id) => {
    setColor(id)
  }

  const handleAdd = (count) => {
    const productObj = {id, name, price, quantity: count, color, size}
    addItem(productObj)

    toast.success(`Fue agregado (${count}) ${name} al carrito`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

return(
  <div className='row'>
    <div className='col'>
      <img src={img} className='img-item-detail' alt={name} />
    </div>
    <div className='col'>
      <img src={img} alt={name} />
    </div>
    <div className='col'>
      <h1>{name}</h1>
      <h2>{desc}</h2>
      <p>CATEGORIA: {cat}</p>
      <h3 className='display-4 mt-5'>${price}</h3>
      <p className='mt-5'>Envío gratis a todo el país</p>
      <p>Devolución gratis, Tienes 30 días desde que lo recibes.</p>
      <p>SELECCIONAR TALLA:</p>
      <ItemOption options={sizes} onSelect={handleSize} />
      <p>SELECCIONAR COLOR:</p>
      <ItemOption options={colors} onSelect={handleColor} />
    </div>
    
    {isInCart(id) ? <Link className='btn btn-dark' to='/cart'> IR AL CARRITO </Link> : <ItemCount onConfirm={handleAdd} stock={stock}/>  }
    <Link className='btn btn-dark mt-2' to={`/`}>CONTINUAR COMPRANDO</Link>
  </div>
  )
}
export default ItemDetail;
