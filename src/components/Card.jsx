import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Card = ({ receta }) => {
	const navigate = useNavigate();

	const { setFavorites, favorites } = useContext(GlobalContext);
	const addToFavorites = () => {
		const isFavorite = favorites.some(
			(fav) => fav.nombre === receta.nombre
		);

		if (isFavorite) {
			setFavorites(
				favorites.filter((fav) => fav.nombre !== receta.nombre)
			);
			// Muestra un toast de éxito al quitar de favoritos
			toast.error(`${receta.nombre} ha sido eliminada de tus favoritos`);
		} else {
			setFavorites([...favorites, receta]);
			// Muestra un toast de éxito al agregar a favoritos
			toast.success(`${receta.nombre} ha sido agregada a tus favoritos`);
		}
	};
	const isFavorite = favorites.some((fav) => fav.nombre === receta.nombre);

	const handleClick = (nombre) => {
		const route = `/home/${nombre}`;
		navigate(route);
	};

	return (
		<div className="contenedor-card">
			<div>
				<img
					className="imagen-card"
					src={receta.imagen}
					alt="imagenreceta"
				></img>
				<div className="caja">
					<h4 className="titulo-caja">{receta.nombre}</h4>
					<NavLink to={`/home/${receta.nombre}`}>
						<button className="btn-caja">Ver más</button>
					</NavLink>
				</div>
			</div>
			<div className="iconos">
				<button
					className="iconos-card favorites"
					onClick={addToFavorites}
				>
					<BookmarkBorderIcon
						sx={{
							fontSize: 30,
							/* color: "#ffe8d6", */
							color: isFavorite ? "red" : "#ffe8d6",
							margin: "0 1rem",
							"&:hover": {
								color: "pink", // Color cuando el usuario pasa el ratón por encima
								cursor: "pointer", // Cambia el cursor a pointer para indicar que es clickeable
							},
						}}
					/>
				</button>
				<button className="iconos-card">
					<IosShareIcon
						sx={{
							fontSize: 30,
							color: "#ffe8d6",
							margin: "0 1rem",
						}}
					/>
				</button>
				<button className="iconos-card">
					<ChatBubbleOutlineIcon
						sx={{
							fontSize: 28,
							color: "#ffe8d6",
							margin: "0 1rem",
						}}
					/>
				</button>
			</div>
		</div>
	);
};

export default Card;
