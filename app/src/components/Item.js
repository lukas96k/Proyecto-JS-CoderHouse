const Item = ({items}) =>{
	return <div className="justify-content-center">
		<p>Titulo: {items.title}</p>
		<p>Miniatura: {items.pictureUrl}</p>
		<p>Precio: ${items.price}</p>
	</div>
}
export default Item;