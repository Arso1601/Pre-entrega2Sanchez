import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProducts(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
      })
  }, [category]);

  return (
    <>
       <ItemList products={products} category={category} />
    </>
  );
}
