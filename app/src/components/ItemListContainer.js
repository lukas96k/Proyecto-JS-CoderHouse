import ItemCount from './ItemCount';
const ItemListContainer = (prop) =>{
	return (
		<div>
			{prop.greeting}
			<ItemCount initial={1} stock={5}/>
		</div>
	)
}
export default ItemListContainer;