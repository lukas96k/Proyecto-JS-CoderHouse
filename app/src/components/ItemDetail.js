import React from "react";
import ItemCount from './ItemCount';
// import {useParams} from "react-router-dom";
// const onAdd = () => {
		
// }
const ItemDetail = ({item}) => {
  // var { idProd } = useParams()
  return (
    <div className="container bg-light border">
      <h4>Detalles</h4>
      <p>ID del producto:{item[0].id}</p>
      <p>Producto: {item[0].title}</p>
      <p>Imagen: {item[0].pictureUrl}</p>
      <p>Descripción{item[0].description}</p>
      <p>Precio: ${item[0].price}</p>
      <ItemCount initial={1} stock={5}/>
    </div>
  );
};

export default ItemDetail;