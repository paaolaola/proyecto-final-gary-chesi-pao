import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { toast } from "react-toastify";

const AgregarReceta = () => {
	const { recetas, agregarReceta, data } = useContext(GlobalContext);

	const [recipe, setRecipe] = useState({
		nombre: "",
		tipo: "",
		ingredientes: [],
		imagen: "",
		video_youtube: "",
		categoria: "",
		descripcion: "",
		preparacion: "",
	});

	const [errors, setErrors] = useState({
		nombre: "",
		tipo: "",
		ingredientes: "",
		imagen: "",
		video_youtube: "",
		categoria: "",
		descripcion: "",
		preparacion: "",
	});

	const isValidUrl = (url) => {
		const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
		return urlRegex.test(url);
	};

	const isUniqueName = (name, data) => {
		return !data.some((recipe) => recipe.nombre === name);
	};

	const isMinLengthValid = (value, fieldName, minLength = 5) => {
		const isValid = value.length >= minLength;
		setErrors((prevErrors) => ({
			...prevErrors,
			[fieldName]: isValid ? "" : `Mínimo ${minLength} caracteres`,
		}));
		return isValid;
	};

	const handleIngredientesChange = (e) => {
		const value = e.target.value;
		// Separar la cadena de ingredientes en un array por líneas
		const ingredientsArray = value
			.split("\n")
			.map((ingredient) => ingredient.trim());

		setRecipe({ ...recipe, ingredientes: ingredientsArray });
		setErrors({
			...errors,
			ingredientes: isMinLengthValid(ingredientsArray, "ingredientes", 2),
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setRecipe({ ...recipe, [name]: value });
		// Limpiar el mensaje de error al cambiar el campo
		setErrors({ ...errors, [name]: "" });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Realiza las validaciones antes de agregar la receta
		const validations = {
			nombre:
				isUniqueName(recipe.nombre, data) &&
				isMinLengthValid(recipe.nombre, "nombre"),
			tipo: isMinLengthValid(recipe.tipo, "tipo"),
			ingredientes: isMinLengthValid(
				recipe.ingredientes,
				"ingredientes",
				2
			),
			imagen: isValidUrl(recipe.imagen),
			video_youtube: isValidUrl(recipe.video_youtube),
			categoria: isMinLengthValid(recipe.categoria, "categoria"),
			descripcion: isMinLengthValid(recipe.descripcion, "descripcion"),
			preparacion: isMinLengthValid(recipe.preparacion, "preparacion"),
		};

		// Actualiza los mensajes de error
		setErrors({
			nombre: !validations.nombre ? "Nombre ya usado o muy corto" : "",
			tipo: !validations.tipo ? "Tipo inválido" : "",
			ingredientes: !validations.ingredientes
				? "Ingredientes inválidos"
				: "",
			imagen: !validations.imagen ? "URL de imagen inválida" : "",
			video_youtube: !validations.video_youtube
				? "URL de video inválida"
				: "",
			categoria: !validations.categoria ? "Categoría inválida" : "",
			descripcion: !validations.descripcion ? "Descripción inválida" : "",
			preparacion: !validations.preparacion ? "Preparación inválida" : "",
		});

		// Si todas las validaciones son verdaderas, agregar la receta
		if (Object.values(validations).every((isValid) => isValid)) {
			agregarReceta(recipe);
			toast.success("Receta enviada con éxito");

			// Limpia el formulario o realiza otras acciones
			setRecipe({
				nombre: "",
				tipo: "",
				ingredientes: [],
				imagen: "",
				video_youtube: "",
				categoria: "",
				descripcion: "",
				preparacion: "",
			});

			// Limpia los mensajes de error
			setErrors({
				nombre: "",
				tipo: "",
				ingredientes: "",
				imagen: "",
				video_youtube: "",
				categoria: "",
				descripcion: "",
				preparacion: "",
			});
		} else {
			// Muestra mensajes de error o realiza acciones correspondientes
			toast.error("Error en la validación");
		}
	};

	return (
		<div className="back-form">
			<Link to="/">
				<button className="btn-global">Volver al home</button>
			</Link>
			<form className="recipe-form" onSubmit={handleSubmit}>
				<h1 className="titulo-receta">Agrega Tu Receta</h1>
				<div>
					<label htmlFor="nombre">Nombre:</label>
					<div className="error-message">{errors.nombre}</div>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={recipe.nombre}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="tipo">Tipo:</label>{" "}
					<div className="error-message">{errors.tipo}</div>
					<input
						type="text"
						id="tipo"
						name="tipo"
						value={recipe.tipo}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="ingredientes">
						Ingredientes: (separarlos por línea){" "}
					</label>
					<div className="error-message">{errors.ingredientes}</div>
					<textarea
						id="ingredientes"
						name="ingredientes"
						value={recipe.ingredientes.join("\n")}
						onChange={handleIngredientesChange}
					/>
				</div>

				<div>
					<label htmlFor="imagen">Imagen URL:</label>
					<div className="error-message">{errors.imagen}</div>
					<input
						type="text"
						id="imagen"
						name="imagen"
						value={recipe.imagen}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="video_youtube">Video URL:</label>
					<div className="error-message">{errors.video_youtube}</div>
					<input
						type="text"
						id="video_youtube"
						name="video_youtube"
						value={recipe.video_youtube}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="categoria">Categoría:</label>{" "}
					<div className="error-message">{errors.categoria}</div>
					<input
						type="text"
						id="categoria"
						name="categoria"
						value={recipe.categoria}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="descripcion">Descripción:</label>
					<div className="error-message">{errors.descripcion}</div>
					<textarea
						id="descripcion"
						name="descripcion"
						value={recipe.descripcion}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor="preparacion">Preparación:</label>{" "}
					<div className="error-message">{errors.preparacion}</div>
					<textarea
						id="preparacion"
						name="preparacion"
						value={recipe.preparacion}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Agregar Receta</button>
			</form>
		</div>
	);
};

export default AgregarReceta;
