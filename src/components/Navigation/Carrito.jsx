import './Carrito.css';
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }


    return (
        <div class="container">
            <h1>carrito</h1>
            {
                carrito.map((product) => (

                    <div key={product.id}>
                        <div class="product-container">
                            <div class="product-image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div class="product">
                                <h4 class="card-title">Nombre: {product.title}</h4>
                                <p class="card-text">Categoria: {product.category}</p>
                                <p>Precio Unidad $ {product.price}</p>
                                <p>Precio total $ {product.price * product.cantidad}</p>
                                <p>Cantidad: {product.cantidad}</p>
                            </div>
                        </div>
                    </div>


                ))
            }
            {carrito.length > 0 ?

                <>
                    <h2>Precio total de la compra: $ {precioTotal()}</h2>
                    
                    <Link to="/checkout"><button type="button" class="btn btn-outline-warning">Comprar</button></Link>
                    <button type="button" class="btn btn-outline-danger" onClick={handleVaciar}>vaciar</button>
                </> :
                <h2>No tienes productos dentro del carrito.</h2>

            }


        </div>
    )
}

export default Carrito