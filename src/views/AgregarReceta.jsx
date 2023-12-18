import React, { useState } from "react";
import { Link } from "react-router-dom";

const AgregarReceta = () => {
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        image: "",
        video: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica para agregar la receta
        console.log("Receta enviada:", recipe);
    };

    return (
        <div className="back-form">
            <Link to="/">
                <button className="btn-global">Volver al home</button>
            </Link>
            <form className="recipe-form" onSubmit={handleSubmit}>
                <h1 className="titulo-receta">Agrega Tu Receta</h1>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" name="name" value={recipe.name} onChange={handleChange} />

                <label htmlFor="ingredients">Ingredientes:</label>
                <textarea id="ingredients" name="ingredients" value={recipe.ingredients} onChange={handleChange} />

                <label htmlFor="image">Imagen URL:</label>
                <input type="text" id="image" name="image" value={recipe.image} onChange={handleChange} />

                <label htmlFor="video">Video URL:</label>
                <input type="text" id="video" name="video" value={recipe.video} onChange={handleChange} />

                <button type="submit">Agregar Receta</button>
            </form>
        </div>
    );
};

export default AgregarReceta;
