import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();


const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad= estaEnElCarrito.cantidad <= producto.cantidad && estaEnElCarrito.cantidad + cantidad;

        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);

    }

    const cantidadCarrito = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.cantidad, 0);

    }
    const precioTotal = () => {
        return carrito.reduce((acumulador, producto) => acumulador + producto.price * producto.cantidad, 0);

    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))

    }, [carrito])

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadCarrito, precioTotal, vaciarCarrito, }} >
            {children}
        </CartContext.Provider>
    )

}
