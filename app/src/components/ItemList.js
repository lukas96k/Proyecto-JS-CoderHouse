import Item from './Item';
const ItemList = ({productos}) =>{
	return (
			productos.map((productos, indice) =>{
				return <Item items={productos}/>
			})
		)
}
export default ItemList;