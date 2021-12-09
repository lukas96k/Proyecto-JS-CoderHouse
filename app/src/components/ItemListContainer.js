import {useState, useEffect} from "react";
import ItemCount from './ItemCount';
import ItemList from './ItemList';
const ListaDeProductos = [
	{id:1, title : "Producto 1", description : "Descripcion Prod 1", price : 10, pictureUrl : 1},
	{id:2, title : "Producto 2", description : "Descripcion Prod 2", price : 30, pictureUrl : 2},
	{id:3, title : "Producto 3", description : "Descripcion Prod 3", price : 60, pictureUrl : 3},
	{id:4, title : "Producto 4", description : "Descripcion Prod 4", price : 5, pictureUrl : 4}
]
const ItemListContainer = () =>{
	const [productos, setProductos] = useState ([])

	useEffect(()=>{
		const promesa = new Promise((res, rej)=>{
			setTimeout(()=>{
				if (Math.random() > 0.5) {
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