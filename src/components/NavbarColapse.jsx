// NavbarCollapse.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavbarCollapse = () => {
	const links = [
		{ to: "/", label: "Inicio" },
		{ to: "/favoritas", label: "Favoritas" },
		{ to: "/mis-recetas", label: "Mis Recetas" },
		{ to: "/nueva-receta", label: "Nueva Receta" },
		{ to: "/ayuda", label: "Ayuda" },
		{ to: "/login", label: "Login" },
	];

	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			className="bg-body-tertiary"
			variant="light"
		>
			<Container className="contain">
				<Navbar.Brand href="#home">RECETAPP</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						{links.map((link, index) => (
							<Nav.Link key={index} href={link.to}>
								{link.label}
							</Nav.Link>
						))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarCollapse;
