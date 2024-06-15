import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {

   
   
    return (

        <div>
            <div className="containerButtom">
                <div class="item"><button type="button" class="btn btn-outline-secondary" onClick={handleRestar}>-</button>
                </div>
                <div class="item"><p>{cantidad}</p></div>
                <div class="item"><button type="button" class="btn btn-outline-secondary" onClick={handleSumar}>+</button>
                </div>
            </div>
            <button type="button" class="btn btn-warning" onClick={handleAgregar}>Agregar al carrito</button>



        </div>
    )

}
export default ItemCount