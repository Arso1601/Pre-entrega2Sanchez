import { useEffect, useState } from 'react';
import { getProducts } from '../../asyncMock';
import ItemList from './ItemList';
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
       <ItemList products={products} category={category} />
    </>
  );
}
