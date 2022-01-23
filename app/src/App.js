import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Main from './components/Main';
import CartContext from './components/Cart/CartContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <CartContext>
          <NavBar/>
          <Main/>
        </CartContext>
      </BrowserRouter>
  );
}
export default App;
