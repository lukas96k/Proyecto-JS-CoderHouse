import CartWidget from './CartWidget';
import {NavLink} from 'react-router-dom';
const NavBar = () =>{
	return <header>
			<h1><NavLink className="nav-link" to="/">Mi Proyecto</NavLink></h1>
				<nav className="navbar navbar-expand-sm bg-light justify-content-center">
				  <ul className="navbar-nav">
				    <li className="nav-item"><NavLink className="nav-link" to="/">Inicio</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" to="/categoria/informatica">Informática</NavLink></li>
				    <li className="nav-item"><NavLink className="nav-link" to="/categoria/oficina">Oficina</NavLink></li>
					<li className="nav-item">
						<NavLink className="nav-link" to="/cart">
							<CartWidget/> 
						</NavLink>
					</li>
				  </ul>
				</nav>
			</header>
}
export default NavBar;