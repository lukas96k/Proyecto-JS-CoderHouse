import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import {Routes,Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Item = ({items}) =>{
	return <div className="inline bg-light border">
		<p>Titulo: {items.title}</p>
		<p>Miniatura: {items.pictureUrl}</p>
		<p>Precio: ${items.price}</p>
		<ItemCount initial={1} stock={5}/>
		<NavLink to="/item/id">Ver detalle </NavLink>
		<Routes>`texto de cadena de caracteres`
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
	</div>
}
export default Item;