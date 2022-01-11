import { useState, useEffect } from "react";
const ItemCount = ({initial, min, stock, setCantidad}) =>{
 	const [contador, setContador]= useState(initial)
 	const aumentarContador = () => {
		contador < stock ? setContador(contador + 1) : console.log("Máximo alcanzado");
  	}
 	const disminuirContador = () => {
		contador > min ? setContador(contador - 1) : console.log("Mínimo alcanzado");
 	}

	useEffect(() => {
		setCantidad(contador);
	}, [contador, setCantidad]);

	return <div>
				<div>
					<div>	
						<button id="botonRestar" onClick={disminuirContador}>-</button>
					</div>
					<div>
						<p>{contador}</p>
					</div>
					<div>
						<button id="botonSumar" onClick={aumentarContador}>+</button>
					</div>
				</div>
			</div>
}
export default ItemCount;