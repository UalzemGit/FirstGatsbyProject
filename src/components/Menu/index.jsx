import React from 'react'
import { Link } from "gatsby"


const Menu = () =>(
	<nav className="navbar bg-dark navbar-expand-sm border-bottom border-bottom-dark" data-bs-theme="dark">

	<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		<li className="nav-item">
			<Link className="nav-link" to="/" activeStyle={{ color: "red" }} activeClassName="active">Home</Link>	
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/contact" activeStyle={{ color: "red" }} activeClassName="active"> Contact</Link>
		</li>
	</ul>


	
	   
	  
	</nav>
	)

export default Menu