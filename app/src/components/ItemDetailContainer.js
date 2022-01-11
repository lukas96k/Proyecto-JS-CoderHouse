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
				let filtro = resultado.filter(x => x.id == idProd) 
				// setDetail (
				// 	filtro[0].id,
				// 	filtro[0].category, 
				// 	filtro[0].title,
				// 	filtro[0].description,
				// 	filtro[0].quantity,
				// 	filtro[0].stock,
				// 	filtro[0].price,
				// 	filtro[0].pictureUrl,
				// )
				setDetail(filtro[0])
				console.log(filtro[0]);
				console.log(typeof filtro[0]);
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
