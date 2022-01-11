import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import CartContext from './components/CartContext';
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
