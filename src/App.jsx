import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';
import Error from './components/Error/Error';
import Item from './components/Item/Item';
import Cart from './components/Cart/Cart';
import CartProvider  from './context/cartContext';

  function App () {

  return (


    <BrowserRouter>

      <CartProvider>
      
      <NavBar/>

      <Routes>

        <Route path = "/" element = { <ItemListContainer/> } />     
        <Route path= "/category/:id" element= {<ItemListContainer/>} />
        <Route path= "/item/:id" element = { <ItemDetailContainer/>} />
        <Route path= "/Cart" element = { <Cart/>}
        
        >
        
        
        </Route>

        <Route path = "*" element = {<Error/>} />

      </Routes>

      <Footer/>

      </CartProvider>

    </BrowserRouter>

    );
    }

export default App
