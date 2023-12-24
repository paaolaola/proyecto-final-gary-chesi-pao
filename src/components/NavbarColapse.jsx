// NavbarCollapse.js

import "../assets/scss/NavbarColapse.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BlenderIcon from "@mui/icons-material/Blender";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const NavbarCollapse = () => {
    const { logout, currentUser } = useContext(GlobalContext);
    const links = [
        { to: "/", label: "Inicio", icon: <HomeIcon sx={{ fontSize: 40 }} /> },
        {
            to: "/favoritas",
            label: "Favoritas",
            icon: <BookmarkIcon sx={{ fontSize: 40 }} />,
        },
        {
            to: "/mis-recetas",
            label: "Mis Recetas",
            icon: <BlenderIcon sx={{ fontSize: 40 }} />,
        },
        {
            to: "/nueva-receta",
            label: "Nueva Receta",
            icon: <AddCircleIcon sx={{ fontSize: 40 }} />,
        },
        {
            to: "/ayuda",
            label: "Ayuda",
            icon: <HelpIcon sx={{ fontSize: 40 }} />,
        },
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
                            <NavLink key={index} to={link.to} className="links-colapse">
                                <li>
                                    <span className="icon-small">{link.icon}</span>
                                    {link.label}
                                </li>
                            </NavLink>
                        ))}
                        {currentUser && (
                            <NavLink to="/login" onClick={logout} className="links-colapse">
                                <li>
                                    <span className="icon-small">
                                        <ExitToAppIcon sx={{ fontSize: 40 }} />
                                    </span>
                                    salir
                                </li>
                            </NavLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarCollapse;
