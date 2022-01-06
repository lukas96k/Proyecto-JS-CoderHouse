import React from "react";
import ItemDetailContainer from './ItemDetailContainer';
import {Routes,Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Item = ({items}) =>{
	return <div className="inline bg-light border">
		<p>Titulo: {items.title}</p>
		<p>Miniatura: {items.pictureUrl}</p>
		<p>Precio: ${items.price}</p>
		<NavLink to={`/item/${items.id}`}>Ver detalle </NavLink>
	</div>
}
export default Item;