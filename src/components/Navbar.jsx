import { NavLink, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BlenderIcon from "@mui/icons-material/Blender";
import HelpIcon from "@mui/icons-material/Help";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Navbar = () => {
	const ActiveClass = ({ isActive }) =>
		isActive ? "btn-activo" : "btn-inactivo";
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
					<button className="btn-navbar">
						<NavLink to="/" className={ActiveClass}>
							<li>
								<HomeIcon sx={{ fontSize: 40 }} />
							</li>
						</NavLink>
					</button>
					<button className="btn-navbar">
						<NavLink to="/favoritas" className={ActiveClass}>
							<li>
								<BookmarkIcon sx={{ fontSize: 40 }} />
							</li>
						</NavLink>
					</button>

					<button className="btn-navbar">
						<NavLink to="/mis-recetas" className={ActiveClass}>
							<li>
								<BlenderIcon sx={{ fontSize: 40 }} />
							</li>
						</NavLink>
					</button>
					<button className="btn-navbar">
						<NavLink to="/nueva-receta" className={ActiveClass}>
							<li>
								<AddCircleIcon sx={{ fontSize: 40 }} />
							</li>
						</NavLink>
					</button>
					<button className="btn-navbar">
						<NavLink to="/ayuda" className={ActiveClass}>
							<li>
								<HelpIcon sx={{ fontSize: 40 }} />
							</li>
						</NavLink>
					</button>
					<button className="btn-navbar">
						<NavLink to="/login" className={ActiveClass}>
							<li>
								{" "}
								<ExitToAppIcon sx={{ fontSize: 40 }} />
							</li>
						</NavLink>
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
