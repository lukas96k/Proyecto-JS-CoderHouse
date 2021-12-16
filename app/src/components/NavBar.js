import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
const NavBar = () =>{
	return <header>
			<h1>Mi Proyecto</h1>
				<nav className="navbar navbar-expand-sm bg-light justify-content-center">
				  <ul className="navbar-nav">
				    <li className="nav-item"><NavLink className="nav-link" to="/categoria/inicio">Inicio</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" to="/categoria/nosotros">Sobre nosotros</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" to="/categoria/productos">Productos</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" to="/categoria/contacto">Contacto</NavLink></li>
				  </ul>
				  <CartWidget/>
				</nav>
			</header>
}
export default NavBar;