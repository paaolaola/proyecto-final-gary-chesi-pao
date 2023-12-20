import { NavLink, useNavigate } from "react-router-dom";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Card = ({ receta }) => {
  const navigate = useNavigate();

  const { setFavorites, favorites } = useContext(GlobalContext);
  const addToFavorites = () => {
    if (isFavorite) setFavorites(favorites.filter((fav) => fav.nombre !== receta.nombre));
    else setFavorites([...favorites, receta]);
  };
  const isFavorite = favorites.some((fav) => fav.nombre === receta.nombre);
  console.log("fav", favorites);
  const handleClick = (nombre) => {
    const route = `/home/${nombre}`;
    navigate(route);
  };

  return (
    <div className="contenedor-card">
      <div>
        <img className="imagen-card" src={receta.imagen} alt="imagenreceta"></img>
        <div className="caja">
          <h4 className="titulo-caja">{receta.nombre}</h4>
          <NavLink to={`/home/${receta.nombre}`}>
            <button className="btn-caja">Ver más</button>
          </NavLink>
        </div>
      </div>
      <div className="iconos">
        <button className="iconos-card favorites" onClick={addToFavorites}>
          <BookmarkBorderIcon
            sx={{
              fontSize: 30,
              /* color: "#ffe8d6", */
              color: isFavorite ? "red" : "#ffe8d6",
              margin: "0 1rem",
              "&:hover": {
                color: "pink", // Color cuando el usuario pasa el ratón por encima
                cursor: "pointer", // Cambia el cursor a pointer para indicar que es clickeable
              },
            }}
          />
        </button>
        <button className="iconos-card">
          <IosShareIcon
            sx={{
              fontSize: 30,
              color: "#ffe8d6",
              margin: "0 1rem",
            }}
          />
        </button>
        <button className="iconos-card">
          <ChatBubbleOutlineIcon
            sx={{
              fontSize: 28,
              color: "#ffe8d6",
              margin: "0 1rem",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Card;
