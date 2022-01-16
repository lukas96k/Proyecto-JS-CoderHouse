import ItemListContainer from './ItemListContainer';
import {Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import Cart from './Cart';
import {RegistroCompra} from './RegistroCompra';
function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:idSeccion" element={<ItemListContainer/>}/>
                <Route path="/item/:idProd" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<RegistroCompra/>}/>
            </Routes>
        </main>
    );
}
export default Main;