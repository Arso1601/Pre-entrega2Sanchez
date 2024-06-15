import './Navigation/Button.css';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { CartContext } from '../context/CartContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../components/firebase/config';

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {

        const pedido ={
                cliente : data,
                productos: carrito,
                total: precioTotal()
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
        .then((doc) => {
            setPedidoId(doc.id);
            vaciarCarrito();
        })
            
    }
    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDKDkIY2e1cA2fjdP-biza1aFwqt4bHupFHA&s"  />
            </div>
        )
    }

  return (
    <div className="container">
    <h1 className="main-title">Finalizar compra</h1>
        
    <div className="product-container">
        
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
        <div class="form-group">
        <label for="exampleInputEmail1">Ingresar Nombre:</label>
            <input type="text"  class="form-control" placeholder="Ingresa tu nombre" {...register("nombre")} />
            </div>
            <div class="form-group">
        <label for="exampleInputEmail1">Ingresar Correo:</label>
            <input type="email"  class="form-control" placeholder="Ingresa tu e-mail" {...register("email")} />
            </div>
            <div class="form-group">
        <label for="exampleInputEmail1">Confirmar Correo:</label>
            <input type="email"  class="form-control" placeholder="Ingresa tu teléfono" {...register("telefono")} />
            </div>
            <>
            <button  class="button-compra btn btn-outline-danger " type="submit">Comprar</button>
            </>
        </form>
        </div>
        </div>
    
  )
}

export default Checkout