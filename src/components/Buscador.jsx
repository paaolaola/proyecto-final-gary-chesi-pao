import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import OrdenarRecetas from "./OrdenarRecetas";

const Buscador = () => {
  return (
    <>
      <div className="contenedor-busq">
        <form className="form-busq">
          <input type="search" placeholder="BUSCA RECETAS O INGREDIENTES"></input>
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
