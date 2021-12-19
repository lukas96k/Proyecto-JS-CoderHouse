import Item from './Item';
const ItemList = ({productos}) =>{
	return (
			productos.map((productos) =>{
				return <Item items={productos}/>
			})
		)
}
export default ItemList;