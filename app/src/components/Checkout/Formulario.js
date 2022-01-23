import { useContext, useState} from 'react';
import {Typography,Paper,TextField,Button, Modal} from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import {Checkout} from './Checkout'
import { CartContext } from '../Cart/CartContext';
import {Timestamp} from 'firebase/firestore';
import {style} from './style';

const Formulario = () => {
    const { carrito, totalCompra, vaciarCarrito} = useContext(CartContext);
    const [id, setID] = useState("Cargando");
    const [info, setInfo] = useState({
		nombre: '',
		email: '',
		telefono: '',
	});
    const orden = {
        buyer: { ...info },
        items: carrito,
        total: totalCompra(),
        date: Timestamp.fromDate(new Date()),
    };

    const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

    const handleInputChange = (e) => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		});
	};
    const handleSubmit = (e) => {
		e.preventDefault();
        Checkout(orden, carrito).then(x => { 
            console.log(x);
            setID(x)
        });
        
    }
    return (
        <>
            {carrito.length > 0 ? (
                <Paper>
                    <Typography variant="h5" color="primary">
                        Ingresá tus Datos
                    </Typography>
                    
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

					<div>
						<Modal open={open} onClose={handleClose}>
							<Box sx={style}>
								
								<Typography variant="h3" color="initial">
									Su Orden ha sido Registrada!
								</Typography>
								<Typography variant="h5" color="initial">
									Su numero de Orden: {id}
								</Typography>
								<Button variant="text" color="primary">
									<NavLink to="/" onClick={vaciarCarrito}>Aceptar</NavLink>
								</Button>
							</Box>
						</Modal>
					</div>

                </Paper>
            ) : (
                <Button color="primary">
                    <NavLink to="/">Volver a Inicio</NavLink>
                </Button>
            )}
        </>
    );
}
export default Formulario;
