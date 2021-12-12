import {useState, useEffect} from "react";
import ItemDetail from './ItemDetail';
const ItemDetailContainer = ({item}) =>{

	const [itemRecibido, setItemRecibido] = useState ([])

	const getItem = () => {
		useEffect(()=>{
			const promesa = new Promise((res, rej)=>{
				setTimeout(()=>{
					if (true) {
						res()
					} else{
						rej()
					}
				},2000)
			})
			promesa.then(()=>{
				console.log('Exito')
				setItemRecibido ({itemRecibido})
			})
			promesa.catch(()=>{
				console.log('Error')
			})
		})
	}
	return (
		<ItemDetail item={itemRecibido}/>
	)
}
export default ItemDetailContainer;