import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { useLocation } from "react-router";
import Card from "./Card";

const Galeria = () => {
    const { data, textoBusqueda, favorites } = useContext(GlobalContext);
    const location = useLocation();
    if (!location || !data) {
        // Puedes redirigir a una página de carga o hacer algo más
        return null;
    }

    let datosMostrar = location.pathname === "/favoritas" ? favorites : data;
    let recetasAMostrar =
        textoBusqueda.trim() === "" ? datosMostrar : datosMostrar.filter((receta) => receta.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()));

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
