import ItemCount from './ItemCount';
import ItemList from './ItemList';
import {useState, useEffect} from "react";
const ListaDeProductos = [
{id:1, title:"Producto 1", description:"Producto 1", price:10, pictureUrl:1}]
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
			console.log(resultado)
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
			<itemList items={productos}/>
		</div>
		</>


	)
}
export default ItemListContainer;