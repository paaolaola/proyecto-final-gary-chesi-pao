// Navbar.js
import { NavLink, Link } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BlenderIcon from "@mui/icons-material/Blender";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Navbar = () => {
	const { logout, currentUser } = useContext(GlobalContext);
	const ActiveClass = ({ isActive }) =>
		isActive ? "btn-activo" : "btn-inactivo";

	const links = [
		{ to: "/", label: "Inicio", icon: <HomeIcon sx={{ fontSize: 40 }} /> },
		{
			to: "/favoritas",
			label: "Favoritas",
			icon: <BookmarkIcon sx={{ fontSize: 40, margin: "0" }} />,
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

	const customTexts = [
		"Inicio",
		"Favoritas",
		"Mis Recetas",
		"Nueva Receta",
		"Ayuda",
	];

	return (
		<nav>
			<div className="navbar">
				<Link to="/">
					<div className="logo-navbar">
						<img
							className="img-navbar"
							src="../img/gorro-chef.png"
							alt="gorro-chef"
						></img>
						<h5 className="texto-navbar ">RECETAPP</h5>
					</div>
				</Link>
				<ul className="nav-ul">
					{links.map((link, index) => (
						<button className="btn-navbar" key={index}>
							<NavLink to={link.to} className={ActiveClass}>
								<li className="nav-li">{link.icon}</li>
								<span className="icon-text">
									{customTexts[index]}
								</span>
							</NavLink>
						</button>
					))}

					{currentUser && (
						<button className="btn-navbar">
							<NavLink onClick={logout} to="/login">
								<ExitToAppIcon
									className="icon-text"
									sx={{ fontSize: 40 }}
								/>{" "}
								<span className="icon-text">Logout</span>
							</NavLink>
						</button>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
