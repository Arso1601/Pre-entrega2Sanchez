import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../asyncMock';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
    const id = useParams().prodId;

    useEffect(() => {

      const docRef = doc(db, "productos", id);
      getDoc(docRef)
        .then((resp) => {
          setProduct(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id]);

  return (
    <>
     {product &&<ItemDetail product={product} />}
    </>
  );
}
export default ItemDetailContainer