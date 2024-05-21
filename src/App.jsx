import './App.css';
import NavComponent from './components/Navigation/NavBar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ItemListContainer from './components/ProductsView/ItemListContainer';

import ItemDetailContainer from './components/ProductsView/ItemDetailContainer';



function App() {
  return (
    <>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/product/:prodId" element={<ItemDetailContainer />} />
          <Route exact path="/products/:category" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}





export default App;

