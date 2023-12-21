// NavbarCollapse.js
import React from "react";
import "../assets/scss/NavbarColapse.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

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
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" variant="light">
            <Container className="contain">
                <Navbar.Brand>
                    <Link to="/">
                        <div className="logo-area">
                            <img className="logo-mobile" src="../img/gorro-chef.png" alt="gorro-chef"></img>
                            <h5 className="logo-texto">RECETAPP</h5>
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="navbar-dropdown">
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
