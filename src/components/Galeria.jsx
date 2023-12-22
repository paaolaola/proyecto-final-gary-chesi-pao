/*dudas con este componente, podemos hacer la galeria en home*/
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { useLocation } from "react-router";
import Card from "./Card";

const Galeria = () => {
	const { data, textoBusqueda, favorites } = useContext(GlobalContext);
	const location = useLocation();
	let datosMostrar = location.pathname === "/favoritas" ? favorites : data;
	let recetasAMostrar =
		textoBusqueda.trim() === ""
			? datosMostrar
			: datosMostrar.filter((receta) =>
					receta.nombre
						.toLowerCase()
						.includes(textoBusqueda.toLowerCase())
			  );

	return (
		<>
			<div className="galeria">
				{recetasAMostrar.map((receta, index) => (
					<Card key={index} receta={receta} />
				))}
			</div>
		</>
	);
};

export default Galeria;
