import {useState, useEffect} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
const ListaDeProductos = [
	{id:1, title : "Remera lisa", description : "Descripcion Prod 1", price : 900, pictureUrl : "url a insertar"},
	{id:2, title : "Jean elastizado", description : "Descripcion Prod 2", price : 300, pictureUrl : "url a insertar"},
	{id:3, title : "Short Deportivo", description : "Descripcion Prod 3", price : 600, pictureUrl : "url a insertar"},
	{id:4, title : "Musculosa", description : "Descripcion Prod 4", price : 500, pictureUrl : "url a insertar"}
]
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
			console.log('Exito')
			setProductos (resultado)
		})
		promesa.catch(()=>{
			console.log('Error')
		})
	},[])
	return (
		<>
		<div>
			<ItemCount initial={1} stock={5}/>
			<ItemList productos={productos}/>
		</div>
		</>
	)
}
export default ItemListContainer;