import { createContext, useState } from "react";
export const context = createContext()

const {Provider, Consumer} = context

const CartContext = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    const [cantidad, setCantidad] = useState (0)
    const agregarProducto =(producto, cantidad)=>{

    }
    const eliminarProducto=(id)=>{

    }
    const vaciarCarrito =()=>{
        setCarrito([])
        setCantidad(0)
    }
    const isInCart =()=>{

    }
    const valorContexto = {
        carrito,
        cantidad,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
    }

    return (
        <Provider value = {valorContexto}>
            {children}
        </Provider>
    )
}
export default CartContext