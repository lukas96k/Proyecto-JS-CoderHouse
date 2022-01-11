import React from "react";
import {useState, useContext} from "react";
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from "./CartContext";

const ItemDetail = ({item}) => {
  const { carrito, agregarProducto, isInCart } = useContext(CartContext); 
  const [cantidad, setCantidad] = useState (1);
  const verCarrito = () => {
      console.log(carrito);
  };
  const handleCantidad= () => {
    item.quantity = cantidad;
    item.stock -= cantidad;
  };
  const handleAgregarProducto = () => {
    if (cantidad > 0) {
      handleCantidad();
      agregarProducto(item);
      console.log(carrito);
    }
  };
  return (
    <div className="container bg-light border">
      <h4>Detalles</h4>
      <p>ID del producto:{item.id}</p>
      <p>Producto: {item.title}</p>
      <p>Imagen: {item.pictureUrl}</p>
      <p>Descripción{item.description}</p>
      <p>Precio: ${item.price}</p>
      {!isInCart(item.id) ? (
					<>
            <ItemCount 
              initial={1} 
              min={0} 
              stock={item.stock} 
              setCantidad={setCantidad}
            />
						<button
							onClick={handleAgregarProducto}
						>
							Agregar al Carrito {cantidad}
						</button>
					</>
				) : (
					<>
							<button>
								<Link to="/"> Volver al Inicio </Link>
							</button>
							<button>
							 <Link to="/cart" onClick={verCarrito}>Ver carrito</Link>
							</button>
					</>
				)
      }
    </div>
  );
};

export default ItemDetail;