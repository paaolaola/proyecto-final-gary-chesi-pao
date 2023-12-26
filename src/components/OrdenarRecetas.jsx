import React, { useState } from "react";
import { useLocation } from "react-router";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const OrdenarRecetas = () => {
  const location = useLocation();
  let datosMostrar;
  let funcionUsar;

  const { data, setData, favorites, setFavorites } = useContext(GlobalContext);
  const [orden, setOrden] = useState(""); // Valor predeterminado vacío

  const toggleOrden = (e) => {
    const nuevoOrden = e.target.value;
    setOrden(nuevoOrden);
    ordenarRecetas(nuevoOrden);
  };

  const ordenarRecetas = (orden) => {
    const recetasOrdenadas = [...datosMostrar];
    if (orden === "asc-nombre") {
      recetasOrdenadas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === "desc-nombre") {
      recetasOrdenadas.sort((a, b) => b.nombre.localeCompare(a.nombre));
    } else if (orden === "asc-tipo") {
      recetasOrdenadas.sort((a, b) => a.tipo.localeCompare(b.tipo));
    } else if (orden === "desc-tipo") {
      recetasOrdenadas.sort((a, b) => b.tipo.localeCompare(a.tipo));
    }
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
    <select className="btn-busq" onChange={(e) => toggleOrden(e)} value={orden}>
      <option value="">Ordenar</option> {/* Opción predeterminada */}
      <option value="asc-nombre">Ordenar Nombre Ascendente</option>
      <option value="desc-nombre">Ordenar Nombre Descendente</option>
      <option value="asc-tipo">Ordenar Tipo Ascendente</option>
      <option value="desc-tipo">Ordenar Tipo Descendente</option>
    </select>
  );
};

export default OrdenarRecetas;
