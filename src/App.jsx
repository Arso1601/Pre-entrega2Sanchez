import './App.css';
import NavComponent from './components/Navigation/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ProductsView/ItemListContainer';

import ItemDetailContainer from './components/ProductsView/ItemDetailContainer';

 import Checkout from './components/CheckOut';

import { CartProvider } from './context/CartContext';
import Carrito from './components/Navigation/Carrito';



function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavComponent />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/product/:prodId" element={<ItemDetailContainer />} />
            <Route exact path="/products/:category" element={<ItemListContainer />} />
            <Route exact path="/carrito" element={<Carrito />} />
            <Route exact path="/checkout" element={<Checkout />} />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}





export default App;

