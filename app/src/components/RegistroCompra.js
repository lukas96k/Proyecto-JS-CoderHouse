import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import {collection,Timestamp,getDocs,addDoc,writeBatch,query,where,documentId} from 'firebase/firestore';
import { db } from './Firebase';
import { NavLink } from 'react-router-dom';
import {Typography,Paper,TextField,Button,Modal} from '@mui/material';
import { Box } from '@mui/system';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};
export const RegistroCompra = () => {
	const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext);

	const [info, setInfo] = useState({
		nombre: '',
		email: '',
		telefono: '',
	});

	const handleInputChange = (e) => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		});
	};

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
    console.log(open)
	const handleSubmit = async (e) => {
		e.preventDefault();

		const orden = {
			buyer: { ...info },
			items: carrito,
			total: totalCompra(),
			date: Timestamp.fromDate(new Date()),
		};

		const batch = writeBatch(db);

		const orderRef = collection(db, 'compras');
		const productosRef = collection(db, 'ListaDeProductos');
		const q = query(
			productosRef,
			where(
				documentId(),
				'in',
				carrito.map((prod) => prod.id)
			)
		);

		const outOfStock = [];

		const productosCarrito = await getDocs(q);

		productosCarrito.docs.forEach((doc) => {
			const itemUpdate = carrito.find((prod) => prod.id === doc.id);

			if (doc.data().stock >= itemUpdate.quantity) {
				batch.update(doc.ref, {
					stock: doc.data().stock - itemUpdate.quantity,
				});
			} else {
				outOfStock.push(itemUpdate);
			}
		});

		if (outOfStock.length === 0) {
			addDoc(orderRef, orden).then((res) => {
				batch.commit();
				return (
					<div>
						<Modal open={open} onClose={handleClose}>
							<Box sx={style}>
								<Typography variant="h3" color="initial">
									El pedido ha sido registrado satisfactoriamente
								</Typography>
								<Typography variant="h5" color="initial">
									Su número de pedido es el siguiente: {res.id}
								</Typography>
								<Button variant="text" color="primary">
									<NavLink to="/" onClick={vaciarCarrito}>Aceptar</NavLink>
								</Button>
							</Box>
						</Modal>
					</div>
				);
			});
		} else {
			console.log(outOfStock);
		}
	};

	return (
		<>
			{carrito.length > 0 ? (
				<Paper>
					<Typography variant="h5" color="primary">
						Ingresá tus Datos
					</Typography>
					<Typography variant="body2" color="initial"></Typography>

					<form onSubmit={handleSubmit}>
						<TextField
							onChange={handleInputChange}
							name="nombre"
							variant="outlined"
							value={info.nombre}
							label="Nombre"
							required
						/>
						<TextField
							onChange={handleInputChange}
							name="email"
							variant="outlined"
							value={info.email}
							type="email"
							label="Email"
							required
						/>
						<TextField
							onChange={handleInputChange}
							name="telefono"
							variant="outlined"
							value={info.telefono}
							type="number"
							label="Teléfono"
							required
						/>
						<Button
							onClick={handleOpen}
							type="submit"
							variant="contained"
							color="secondary"
						>
							Enviar
						</Button>
					</form>
				</Paper>
			) : (
				<Button color="primary">
					<NavLink to="/">Volver a Inicio</NavLink>
				</Button>
			)}
		</>
	);
};