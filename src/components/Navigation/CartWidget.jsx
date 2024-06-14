import { useContext } from 'react';
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
export default function CartWidget() {

    const { cantidadCarrito } = useContext(CartContext);
    return (
        <>
            <div >
                <Link class="carrito" to="/carrito">
                    <button class="carrito btn btn-warning ">{cantidadCarrito()}🛒</button>
                </Link>
            </div>

        </>
    );
}
