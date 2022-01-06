import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import ListaDeProductos from './ListaDeProductos';
import {useParams} from "react-router-dom";

const getItem = new Promise((res, rej)=>{
	setTimeout(()=>{
		if (true) {
			res(ListaDeProductos)
		} else{
			rej()
		}
	},2000)
})

const ItemDetailContainer = () => {
	const { idProd } = useParams()
  const [detail, setDetail] = useState({});
	useEffect(()=>{
		getItem.then((resultado)=>{

			if (!idProd){
				setDetail (resultado)
			}else{
				setDetail (resultado[parseInt(idProd)])
			}
			
		})
	},[idProd]) 
	return (
		<div>
			<ItemDetail item={detail}/>
		</div>
	)
};

export default ItemDetailContainer;
