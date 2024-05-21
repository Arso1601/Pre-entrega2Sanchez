import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function SingleProd() {
  const [product, setProduct] = useState({});

  const { prodId } = useParams();

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, []);

  return (
    <>
      <div class="container">
        <h1>{product.category}</h1>

        <div class="card text-center">
          <div class="card-header">
            <img src={product.image} alt={product.title} />
          </div>
          <div class="card-body">
            <h3 class="card-title">Nombre: {product.title}</h3>
            <p class="card-text">Descripcion: {product.description}</p>
            <p class="card-text">Categoria: {product.category}</p>
            <p class="card-text">Precio: $ {product.price}</p>
            <p class="card-text">Codigo: {prodId}</p>
          </div>
        </div>
      </div>
    </>
  );
}
