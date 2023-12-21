import React from "react";
import { useLocation } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const OrdenarRecetas = () => {
  const location = useLocation();
  let datosMostrar;
  let funcionUsar;

  const { data, setData, favorites, setFavorites } = useContext(GlobalContext);
  const ordenarAlfabeticamente = () => {
    const recetasOrdenadas = [...datosMostrar].sort((a, b) => a.nombre.localeCompare(b.nombre));
    funcionUsar(recetasOrdenadas);
  };
  const ordenarCategoria = () => {
    const recetasOrdenadas = [...datosMostrar].sort((a, b) => a.categoria.localeCompare(b.categoria));
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
      <div className="contenedor-ord">
        <p>Ordenar por:</p>
        <button className="btn-ord" onClick={ordenarCategoria}>
          <p>Categoria</p>
        </button>
        <button className="btn-ord" onClick={ordenarAlfabeticamente}>
          <p>Alfabéticamente</p>
        </button>
      </div>
    </>
  );
};

export default OrdenarRecetas;
