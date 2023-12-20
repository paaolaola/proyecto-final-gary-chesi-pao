import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";

const AgregarReceta = () => {
	const { recetas, agregarReceta } = useContext(GlobalContext);

	const [recipe, setRecipe] = useState({
		nombre: "",
		tipo: "",
		ingredientes: "",
		imagen: "",
		video_youtube: "",
		categoria: "",
		descripcion: "",
		preparacion: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setRecipe({ ...recipe, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		agregarReceta(recipe);
		console.log("Receta enviada:", recipe);
	};

	return (
		<div className="back-form">
			<Link to="/">
				<button className="btn-global">Volver al home</button>
			</Link>
			<form className="recipe-form" onSubmit={handleSubmit}>
				<h1 className="titulo-receta">Agrega Tu Receta</h1>
				<label htmlFor="nombre">Nombre:</label>
				<input
					type="text"
					id="nombre"
					name="nombre"
					value={recipe.nombre}
					onChange={handleChange}
				/>
				<label htmlFor="tipo">Tipo:</label>
				<input
					type="text"
					id="tipo"
					name="tipo"
					value={recipe.tipo}
					onChange={handleChange}
				/>

				<label htmlFor="ingredientes">Ingredientes:</label>
				<textarea
					id="ingredientes"
					name="ingredientes"
					value={recipe.ingredientes}
					onChange={handleChange}
				/>

				<label htmlFor="imagen">Imagen URL:</label>
				<input
					type="text"
					id="imagen"
					name="imagen"
					value={recipe.imagen}
					onChange={handleChange}
				/>

				<label htmlFor="video_youtube">Video URL:</label>
				<input
					type="text"
					id="video_youtube"
					name="video_youtube"
					value={recipe.video_youtube}
					onChange={handleChange}
				/>

				<label htmlFor="categoria">Categoría:</label>
				<input
					type="text"
					id="categoria"
					name="categoria"
					value={recipe.categoria}
					onChange={handleChange}
				/>

				<label htmlFor="descripcion">Descripción:</label>
				<textarea
					id="descripcion"
					name="descripcion"
					value={recipe.descripcion}
					onChange={handleChange}
				/>

				<label htmlFor="preparacion">Preparación:</label>
				<textarea
					id="preparacion"
					name="preparacion"
					value={recipe.preparacion}
					onChange={handleChange}
				/>

				<button type="submit">Agregar Receta</button>
			</form>
		</div>
	);
};

export default AgregarReceta;
