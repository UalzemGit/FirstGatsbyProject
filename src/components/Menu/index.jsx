import React from 'react'
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Menu = () =>{

const {logo} = useStaticQuery(graphql`
	query {
		logo: file(relativePath: { eq: "gatsby-icon.png" }) {
		childImageSharp {
			fixed(width: 45, height: 45) {
			...GatsbyImageSharpFixed
			}
		}
		}
	}
`)

	return(
		
		<nav className="navbar bg-dark navbar-expand-sm border-bottom border-bottom-dark px-4" data-bs-theme="dark">

		<Link className="navbar-brand" to="/">
			<Img fixed={logo.childImageSharp.fixed} alt="Logo Site"/>
		</Link>

	<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		<li className="nav-item">
			<Link className="nav-link" to="/" activeStyle={{ color: "red" }} activeClassName="active">Home</Link>	
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/about" activeStyle={{ color: "red" }} activeClassName="active">About</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/gallery" activeStyle={{ color: "red" }} activeClassName="active"> Gallery</Link>
		</li>
		<li className="nav-item">
			<Link className="nav-link" to="/contact" activeStyle={{ color: "red" }} activeClassName="active"> Contact</Link>
		</li>
	</ul>
	</nav>
	
	)



	
}

export default Menu