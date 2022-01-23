import React from 'react';
import { createContext, useState } from "react";

export const CartContext = createContext();

const {Provider} = CartContext;

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
        return carrito.some((item) => item.id == id);
    }
    const totalCantidad = () => {
		return carrito.reduce((acc, item) => acc + item.quantity, 0);
	};

	const totalCompra = () => {
		return carrito.reduce((acc, item) => acc + item.price * item.quantity, 0);
	};
    const valorContexto = {
        carrito,
        setCarrito,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        isInCart,
        totalCantidad,
        totalCompra
    }

    return (
        <Provider value = {valorContexto}>
            {children}
        </Provider>
    )
}
export default CartProvider;