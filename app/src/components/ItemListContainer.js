import {useState, useEffect} from "react";
import ItemList from './ItemList';
import ListaDeProductos from './ListaDeProductos';
const ItemListContainer = () =>{
	const [productos, setProductos] = useState ([])
	useEffect(()=>{
		const promesa = new Promise((res, rej)=>{
			setTimeout(()=>{
				if (true) {
					res(ListaDeProductos)
				} else{
					rej()
				}
			},2000)
		})
		promesa.then((resultado)=>{
			setProductos (resultado)
		})
	},[])
	if(productos.length===0){
		return (
			<div> 
				<h2> Cargando... </h2>
			</div>
		)
	}else {
		return (
			<>
			<div className="container bg-light border">
				<ItemList productos={productos}/>
			</div>
			</>
		)
	}
	
}
export default ItemListContainer;