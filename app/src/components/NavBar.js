import CartWidget from './CartWidget';
const NavBar = () =>{
	return <header>
			<h1>Mi Proyecto</h1>
				<nav className="navbar navbar-expand-sm bg-light justify-content-center">
				  <ul className="navbar-nav">
				    <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
				    <li className="nav-item"><a className="nav-link" href="#">Sobre nosotros</a></li>
				    <li className="nav-item"><a className="nav-link" href="#">Productos</a></li>
				    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
				  </ul>
				  <CartWidget/>
				</nav>
			</header>
}
export default NavBar;