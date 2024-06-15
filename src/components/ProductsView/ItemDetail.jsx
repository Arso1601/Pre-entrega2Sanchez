import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';


const ItemDetail = ( {product} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
     

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      cantidad < product.cantidad && setCantidad(cantidad + 1)
  }

  return (
    <>
      <div class="container">
        <h1>{product.category}</h1>
        <div class="product-container">
          <div class="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div class="product-description">
            <h3 class="card-title">Nombre: {product.title}</h3>
            <p class="card-text">Descripcion: {product.description}</p>
            <p class="card-text">Categoria: {product.category}</p>
            <p class="card-text">Precio: $ {product.price}</p>

            <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={() => { agregarAlCarrito(product, cantidad) }}
                />
            </div>
        </div>
      </div>
    </>
  );
}
export default ItemDetail