import './Spinner.css';
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

  const [isLoading, setIsLoading] = useState(true);

  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1000);


  return (
    <>
    {isLoading ?<div class="spinner">
      <div class="dot1"></div>
       <div class="dot2"></div>
</div>:<ItemList products={products} category={category} />}
    </>
  );
}
