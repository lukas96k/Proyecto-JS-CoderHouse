
const ItemList = ({items}) =>{
	return <div>
		<p>ID:{items.productos.id}</p>
		<p>Titulo:{items.productos.title} </p>
		<p>Titulo:{items.productos.description} </p>
		<p>Titulo:{items.productos.price} </p>
		<p>Titulo:{items.productos.pictureUrl} </p>
	</div>
}
export default ItemList;