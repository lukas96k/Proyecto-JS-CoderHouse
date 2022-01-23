import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const ItemCount = ({initial, min, stock, precio, setCantidad}) =>{
 	const [contador, setContador]= useState(initial)
 	const aumentarContador = () => {
		contador < stock ? setContador(contador + 1) : console.log("Máximo alcanzado");
  	}
 	const disminuirContador = () => {
		contador > min ? setContador(contador - 1) : console.log("Mínimo alcanzado");
 	}
	 const limpiarContador = () => {
		if (contador > 0) {
			setContador(contador - contador);
		}
	};
	useEffect(() => {
		setCantidad(contador);
	}, [contador, setCantidad]);

	return (
		<Paper>
			<Typography variant="h6">Cantidad: {contador}</Typography>
			<Typography variant="body1">
				Subtotal $ {contador * precio}
			</Typography>
	
			<ButtonGroup sx={{ margin: '1rem' }}>
				<Button
					variant="contained"
					color="primary"
					onClick={disminuirContador}
				>
					-
				</Button>
				<Button
					variant="outlined"
					color="error"
					onClick={limpiarContador}
				>
					Vaciar
				</Button>
				<Button
					variant="contained"
					color="primary"
					onClick={aumentarContador}
				>
					+
				</Button>
			</ButtonGroup>
		</Paper>
	);
}
export default ItemCount;