import {useState, useEffect} from "react";
import ItemList from './ItemList';
import {useParams} from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Box } from '@mui/system';
import { db } from './Firebase';
import { CircularProgress } from '@mui/material';

const ItemListContainer = () =>{
	
	const [loading, setLoading] = useState(false);
	const [productos, setProductos] = useState ([])
	const {idSeccion} = useParams();
	
	const formatearYsetear = (arrayDoc) => {
		setProductos (arrayDoc.map(documento=>{
			return {...documento.data(), id: documento.id}
		}))
	}

	const traerUsuarios = async (id) =>{
		const productosDB = collection(db, "ListaDeProductos");
		if (id===undefined) {
			const consulta = await getDocs(productosDB)
			formatearYsetear(consulta.docs)
		}else if (id === "informatica"){
			const constraint = where("category", "==", "informatica")
			const customQuery = query(productosDB,constraint)
			const consulta = await getDocs(customQuery)
			formatearYsetear(consulta.docs)
		}else if (id === "oficina"){
			const constraint = where("category", "==", "oficina")
			const customQuery = query(productosDB,constraint)
			const consulta = await getDocs(customQuery)
			formatearYsetear(consulta.docs)
		}
		setLoading(false)
	}
	useEffect(()=>{
		setLoading(true);
		traerUsuarios(idSeccion);
	}, [idSeccion]);

	return loading ? (
		<Box
			sx={{
				display: 'flex',
				padding: '1rem',
				right: '50%',
				top: '25%',
			}}
		>
			<CircularProgress />
		</Box>
	) : (
		<ItemList productos={productos} />
	);
};

export default ItemListContainer;