import {useState} from "react"
const ItemCount = ({initial, stock}) =>{
 	const [contador, setContador]= useState(initial)
 	const [contadorStock, setStock]= useState(stock)
 	const aumentarContador = () => {
 		if (stock >= contador){
 			setContador (contador + 1)
 			setStock (contadorStock - 1)
 		} else {
 			console.log('Sin stock')
 		}
  	}

 	const disminuirContador = () => {
 		if (stock >= contador && contador!==0){
	 		setContador (contador - 1)
	 		setStock (contadorStock + 1)
 		}else if (contador >= stock){
 			setContador (contador - 1)
	 		setStock (contadorStock + 1)
 		}
 	}

	const onAdd = () => {
		
	}

	return <div>
				<div>
					<button id="botonRestar" onClick={disminuirContador}>-</button>
					<div>
						<p>{contador}</p>
					</div>
					<button id="botonSumar" onClick={aumentarContador}>+</button>
				</div>
				<button id="botonAceptar" onClick={onAdd}>Sumar al carrito</button>
			</div>
}
export default ItemCount;