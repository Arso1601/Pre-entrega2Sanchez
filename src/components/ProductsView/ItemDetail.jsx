import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
    
  
    
  
    

  return (
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
            <p class="card-text">Codigo: {prodId}</p>
            <ItemCount item ={product}/>
          </div>
        </div>
      </div>
  );
}

export default ItemDetail



