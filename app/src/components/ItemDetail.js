import React from "react";
import {useState, useContext} from "react";
import ItemCount from './ItemCount';
import {Link} from 'react-router-dom';
import {CartContext} from "./CartContext";
import {Button,Card,Typography,ButtonGroup,CardMedia} from '@mui/material';
import { Box } from '@mui/system';

const ItemDetail = ({item}) => {
  const { agregarProducto, isInCart } = useContext(CartContext); 
  const [cantidad, setCantidad] = useState (1);
  const handleCantidad= () => {
    item.quantity = cantidad;
  };
  const handleAgregarProducto = () => {
    if (cantidad > 0) {
      handleCantidad();
      agregarProducto(item);
    }
  };
  return (
    <Box>
      <Card
        key={item.id}
        sx={{
          width: '250px',
          maxHeight: '650px',
        }}
      >
        <CardMedia component="img" title={item.image} image={item.image} />
        <Typography variant="h5" color="initial">
          {item.title}
        </Typography>
        <Typography variant="body2">
          {item.description}
        </Typography>
        <Typography variant="body2">
          {item.stock} disponibles
        </Typography>
        <Typography variant="h5" color="initial">
          ${item.price}
        </Typography>
  
        {!isInCart(item.id) ? (
          <>
            <ItemCount
                initial={1} 
                min={0} 
                stock={item.stock} 
                precio={item.price}
                setCantidad={setCantidad}
            />
            <Button
              sx={{ margin: '1rem' }}
              variant="contained"
              color="success"
              onClick={handleAgregarProducto}
            >
              Agregar al Carrito
            </Button>
          </>
        ) : (
          <>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label=""
            >
              <Button variant="contained" color="primary">
                <Link to="/"> Volver al Inicio </Link>
              </Button>
              <Button variant="text" color="success">
                <Link to="/cart">Terminar mi Compra</Link>
              </Button>
            </ButtonGroup>
          </>
        )}
      </Card>
    </Box>
  );
};

export default ItemDetail;