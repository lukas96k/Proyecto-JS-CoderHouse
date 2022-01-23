import ItemListContainer from './ItemList/ItemListContainer';
import ItemDetailContainer from './ItemDetail/ItemDetailContainer';
import Cart from './Cart/Cart';
import {ProcesoCompra} from './Checkout/ProcesoCompra.js';
import {Routes,Route} from 'react-router-dom';
function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/categoria/:idSeccion" element={<ItemListContainer/>}/>
                <Route path="/item/:idProd" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/compra" element={<ProcesoCompra/>}/>
            </Routes>
        </main>
    );
}
export default Main;