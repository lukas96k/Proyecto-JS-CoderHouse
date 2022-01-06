import React from "react";
import ItemCount from './ItemCount';
// 
// const onAdd = () => {
		
// }
const ItemDetail = ({item}) => {
  return (
    <div className="container bg-light border">
      <h4>Detalles</h4>
      <p>ID del producto:{item.id}</p>
      <p>Producto: {item.title}</p>
      <p>Imagen: {item.pictureUrl}</p>
      <p>Descripción{item.description}</p>
      <p>Precio: ${item.price}</p>
      <ItemCount initial={1} stock={5}/>
    </div>
  );
};

export default ItemDetail;