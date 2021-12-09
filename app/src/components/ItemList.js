import Item from './Item';
const ItemList = ({productos}) =>{
	return (
			productos.map((productos, indice) =>{
				return <Item items={productos} indice={indice}/>
			})
		)
}
export default ItemList;