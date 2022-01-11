import React from 'react';
import { createContext, useState } from "react";

export const CartContext = createContext();

const {Provider} = CartContext

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    const agregarProducto =(item)=>{
        setCarrito([...carrito, item]);
    }
    const eliminarProducto=(id)=>{
        setCarrito(carrito.filter((item) => item.id !== id));
    }
    const vaciarCarrito =()=>{
		if (carrito.length > 0) {
			setCarrito([]);
		}
    }
    const isInCart =(id)=>{
        return carrito.some((prod) => prod.id == id);
    }
    const valorContexto = {
        carrito,
        setCarrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        isInCart
    }

    return (
        <Provider value = {valorContexto}>
            {children}
        </Provider>
    )
}
export default CartProvider;