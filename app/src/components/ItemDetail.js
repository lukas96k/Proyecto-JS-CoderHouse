const ItemDetail = ({item}) =>{
	return (
		<>
		<div id="PanelDetalles">
			<p>Titulo: {item.title}</p>
			<div>
				<p>Imagen: {item.pictureUrl}</p>
			</div>
			<p>Descricion: {item.description}</p>
			<p>Precio: ${item.price}</p>
		</div>
		</>
	)
}
export default ItemDetail;