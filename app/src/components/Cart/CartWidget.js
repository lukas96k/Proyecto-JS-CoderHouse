import React, { useContext } from 'react';
import {CartContext} from "./CartContext";
const CartWidget = () =>{
	const { totalCantidad } = useContext(CartContext);
	return (
		<div>
			<span>{totalCantidad()}</span>
			<span className= "material-icons">shopping_cart</span>
		</div>
		)
}
export default CartWidget;