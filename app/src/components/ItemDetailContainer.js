import React from "react";
import {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from './Firebase';
import { CircularProgress } from '@mui/material';

const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(false);
	const { idProd } = useParams()
  	const [producto, setProducto] = useState ([])
	useEffect(()=>{
		setLoading(true);
		const referencia = doc(db, 'ListaDeProductos', idProd);
		getDoc(referencia)
			.then((doc) => {
				setProducto({
					id: doc.id,
					...doc.data(),
				});
			})
			.finally(() => {
				setLoading(false);
			});
	},[idProd]) 
	return <>
		{loading ? <CircularProgress /> : <ItemDetail item={producto} />}
	</>;
};

export default ItemDetailContainer;
