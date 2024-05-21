
import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    getProducts
      .then((data) => {
        if (category) {
          setProducts(data.filter((prod) => prod.category === category));
        } else {
          setProducts(data);

        }
      })
  }, [category]);

  return (
    <>
      <div class="container">
        <h1>{category}</h1>
        <article class="flex-container card-item">
          {products.map((product) => (
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
              idProd={product.id}
              category={product.category}
            />
          ))}
        </article>
      </div>
    </>
  );
}
