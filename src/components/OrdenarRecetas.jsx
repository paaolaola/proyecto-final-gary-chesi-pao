import React from "react";
import { useLocation } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const OrdenarRecetas = () => {
	const location = useLocation();
	let datosMostrar;
	let funcionUsar;

	const { data, setData, favorites, setFavorites } =
		useContext(GlobalContext);
	const ordenarAlfabeticamente = (e) => {
		e.preventDefault();
		const recetasOrdenadas = [...datosMostrar].sort((a, b) =>
			a.nombre.localeCompare(b.nombre)
		);
		funcionUsar(recetasOrdenadas);
	};
	const ordenarCategoria = (e) => {
		e.preventDefault();
		const recetasOrdenadas = [...datosMostrar].sort((a, b) =>
			a.categoria.localeCompare(b.categoria)
		);
		funcionUsar(recetasOrdenadas);
	};

	if (location.pathname === "/") {
		datosMostrar = data;
		funcionUsar = setData;
	}
	if (location.pathname === "/favoritas") {
		datosMostrar = favorites;
		funcionUsar = setFavorites;
	}

	return (
		<>
			<button className="btn-busq" onClick={ordenarCategoria}>
				Tipo
			</button>
			<button className="btn-busq" onClick={ordenarAlfabeticamente}>
				Nombre
			</button>
		</>
	);
};

export default OrdenarRecetas;
