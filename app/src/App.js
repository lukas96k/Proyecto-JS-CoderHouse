import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import CartContext from './components/CartContext';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from "react";

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Main/>
      </BrowserRouter>
  );
}
export default App;
