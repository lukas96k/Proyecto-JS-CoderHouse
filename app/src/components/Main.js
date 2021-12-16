import ItemListContainer from './ItemListContainer';
import {Routes,Route} from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
function Main() {
    return (
        <main>
            <Routes>
                <Route path="/categoria/inicio" element={<Main/>}/>
                <Route path="/categoria/:productos" element={<ItemListContainer/>}/>
            </Routes>
            <ItemDetailContainer/>
        </main>
    );
}
export default Main;