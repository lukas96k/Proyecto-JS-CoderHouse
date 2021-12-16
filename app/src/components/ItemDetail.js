import React from "react";

const ItemDetail = ({item}) => {
  console.log(item);
  return (
    <div className="container bg-light border" id={item[0].id}>
      <h4>Detalles</h4>
      <p>ID del producto:{item[0].id}</p>
      <p>Producto: {item[0].title}</p>
      <p>Imagen: {item[0].pictureUrl}</p>
      <p>Descripción{item[0].description}</p>
      <p>Precio: ${item[0].price}</p>
    </div>
  );
};

export default ItemDetail;