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
  const [detail, setDetail] = useState(ListaDeProductos);
  const { idProd } = useParams()
  console.log(idProd);
	useEffect(()=>{
		getItem.then((resultado)=>{
			setDetail (resultado)
		})
	},[])
	return (
		<div>
		<ItemDetail item={detail}/>
		</div>
	)
};

export default ItemDetailContainer;
