import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { toast } from "react-toastify";

const AgregarReceta = () => {
  const { agregarReceta, data } = useContext(GlobalContext);

  const [recipe, setRecipe] = useState({
    nombre: "",
    tipo: "",
    ingredientes: [],
    imagen: "",
    video_youtube: "",
    descripcion: "",
    preparacion: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    tipo: "",
    ingredientes: "",
    imagen: "",
    video_youtube: "",
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
    const ingredientsArray = value.split("\n").map((ingredient) => ingredient.trim());

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
      nombre: isUniqueName(recipe.nombre, data) && isMinLengthValid(recipe.nombre, "nombre"),
      tipo: isMinLengthValid(recipe.tipo, "tipo"),
      ingredientes: isMinLengthValid(recipe.ingredientes, "ingredientes", 2),
      imagen: isValidUrl(recipe.imagen),
      video_youtube: isValidUrl(recipe.video_youtube),
      descripcion: isMinLengthValid(recipe.descripcion, "descripcion"),
      preparacion: isMinLengthValid(recipe.preparacion, "preparacion"),
    };

    // Actualiza los mensajes de error
    setErrors({
      nombre: !validations.nombre ? "Nombre ya usado o muy corto" : "",
      tipo: !validations.tipo ? "Tipo inválido" : "",
      ingredientes: !validations.ingredientes ? "Ingredientes inválidos" : "",
      imagen: !validations.imagen ? "URL de imagen inválida" : "",
      video_youtube: !validations.video_youtube ? "URL de video inválida" : "",
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
        <div className="form-container">
          <h1 className="titulo-receta">Agrega Tu Receta</h1>
          <div className="form-nombre">
            <div className="form-lass">
              <div className="error-message">{errors.nombre}</div>
              <input placeholder="Nombre:" type="text" id="nombre" name="nombre" value={recipe.nombre} onChange={handleChange} />
            </div>

            <div className="form-class">
              <div className="error-message">{errors.tipo}</div>
              <select id="tipo" name="tipo" value={recipe.tipo} onChange={handleChange}>
                <option value="" disabled>
                  Elige tipo
                </option>
                <option value="Postres">Postres</option>
                <option value="Plato Principal">Plato Principal</option>
                <option value="Ensalada">Ensalada</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="ingredientes">( Minimo 2 y separarlos por línea)</label>
            <div className="error-message">{errors.ingredientes}</div>
            <textarea
              placeholder="Ingredientes: "
              id="ingredientes"
              name="ingredientes"
              value={recipe.ingredientes.join("\n")}
              onChange={handleIngredientesChange}
            />
          </div>

          <div>
            <div className="error-message">{errors.imagen}</div>
            <input placeholder="Imagen URL:" type="text" id="imagen" name="imagen" value={recipe.imagen} onChange={handleChange} />
          </div>

          <div>
            <label htmlFor="video_youtube">(Incorporar URL video embed)</label>
            <div className="error-message">{errors.video_youtube}</div>
            <input placeholder="Video URL:" type="text" id="video_youtube" name="video_youtube" value={recipe.video_youtube} onChange={handleChange} />
          </div>

          <div>
            <div className="error-message">{errors.descripcion}</div>
            <textarea placeholder="Descripción:" id="descripcion" name="descripcion" value={recipe.descripcion} onChange={handleChange} />
          </div>

          <div>
            <div className="error-message">{errors.preparacion}</div>
            <textarea placeholder="Preparación:" id="preparacion" name="preparacion" value={recipe.preparacion} onChange={handleChange} />
          </div>
          <button type="submit">Agregar Receta</button>
        </div>
      </form>
    </div>
  );
};

export default AgregarReceta;
