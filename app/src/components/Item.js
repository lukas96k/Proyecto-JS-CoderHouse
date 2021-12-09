const Item = ({items}) =>{
	console.log(items)
	console.log(typeof items)
	return <div>
		<p>Id: {items.id}</p>
		<p>Titulo: {items.title}</p>
		<p>Descripcion: {items.description}</p>
		<p>Precio: {items.price}</p>
		<p>Imagen: {items.pictureUrl}</p>
	</div>
}
export default Item;