import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import OrdenarRecetas from "./OrdenarRecetas";

const Buscador = () => {
  const { data, setTextoBusqueda } = useContext(GlobalContext);

  const handleSearchChange = (e) => {
    setTextoBusqueda(e.target.value);
  };

  return (
    <>
      <div className="contenedor-busq">
        <form className="form-busq">
          <input type="search" placeholder="BUSCA RECETAS O INGREDIENTES" onChange={handleSearchChange}></input>
          <button className="btn-busq">Buscar</button>
        </form>
        <div>
          <NavLink to="/perfil">
            <button className="btn-busq-perfil "></button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Buscador;
