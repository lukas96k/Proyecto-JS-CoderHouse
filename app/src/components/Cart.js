import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Card, ButtonGroup, Paper } from '@mui/material';
import {CartContext} from "./CartContext";
const Cart = () => {
	const { carrito, vaciarCarrito, eliminarProducto, totalCompra } =
	useContext(CartContext);
	return (
		<>
			<Card>
				{carrito.map((item) => {
					return (
						<Paper key={item.id}>
							<Typography>Producto: {item.title}</Typography>
							<Typography>Descripcion: {item.description}</Typography>
							<Typography>Cantidad seleccionada: {item.quantity}</Typography>
							<Typography>Precio unitario: {item.price}</Typography>
							<Typography>Total: ${totalCompra()}</Typography>
							<Button
								onClick={() => {
									eliminarProducto(item.id);
								}}
								variant="text"
								color="primary"
							>
								Eliminar
							</Button>
						</Paper>
					);
				})}
			</Card>
			{carrito.length > 0 ? (
				<ButtonGroup variant="text" color="primary" aria-label="">
					<Button
						variant="contained"
						color="error"
						onClick={vaciarCarrito}
					>
						Vaciar Carrito
					</Button>
					<Button variant="contained" color="success">
						<Link to="/checkout">Terminar mi Compra</Link>
					</Button>
				</ButtonGroup>
			) : (
				<Button variant="contained" color="error">
					<Link to="/">Volver al Inicio</Link>
				</Button>
			)}
		</>
	);
}
export default Cart;