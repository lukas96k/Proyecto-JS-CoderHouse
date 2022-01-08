import {useState, useEffect} from "react";
import ItemList from './ItemList';
import ListaDeProductos from './ListaDeProductos';
import {useParams} from "react-router-dom";
const ItemListContainer = () =>{
	const [productos, setProductos] = useState ([])
	const {idSeccion} = useParams()
	useEffect(()=>{
		const promesa = new Promise((res, rej)=>{
			setTimeout(()=>{
				if (idSeccion===undefined) {
					res(ListaDeProductos)
				} else if (idSeccion === "informatica"){
					let listaFiltrada = ListaDeProductos.filter(x => x.category === "informatica") 
					res(listaFiltrada)
				} else if (idSeccion === "oficina"){
					let listaFiltrada = ListaDeProductos.filter(x => x.category === "oficina")
					res(listaFiltrada)
				}else{
					rej()
				}
			},2000)
		})

		if (!idSeccion){
			promesa.then((resultado)=>{
				setProductos (resultado)
			})
		}else if (idSeccion === "informatica"){
			promesa.then((resultado)=>{
				setProductos (resultado)
			})
		}else{
			promesa.then((resultado)=>{
				setProductos (resultado)
			})
		}
	},[idSeccion])

	return (
		<>
		<div className="container bg-light border">
			<ItemList productos={productos}/>
		</div>
		</>
	)
}

export default ItemListContainer;