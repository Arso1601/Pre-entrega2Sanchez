import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ item }) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
     

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.cantidad && setCantidad(cantidad + 1)
    }

   
    return (

        <div>
            <div className="containerButtom">
                <div class="item"><button type="button" class="btn btn-outline-secondary" onClick={handleRestar}>-</button>
                </div>
                <div class="item"><p>{cantidad}</p></div>
                <div class="item"><button type="button" class="btn btn-outline-secondary" onClick={handleSumar}>+</button>
                </div>
            </div>
            <button type="button" class="btn btn-warning" onClick={() => {agregarAlCarrito(item, cantidad)}}>Agregar al carrito</button>



        </div>
    )

}
export default ItemCount