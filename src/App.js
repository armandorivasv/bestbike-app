import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (    
    <div className='App'>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={ <ItemDetailContainer />} />
            <Route path='/cart' element={ <Cart />} />
            <Route path='/checkout' element={ <Checkout />} />
            <Route path='*' element={<h1 className='pt-5 mt-5 text-center'>LA PAGINA NO EXISTE - ERROR 404</h1>} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <ToastContainer />

      
  </div>
  );
}

export default App;
