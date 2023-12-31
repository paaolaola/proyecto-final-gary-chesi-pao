import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";

const Card = ({ receta }) => {
    const navigate = useNavigate();

    const { setFavorites, favorites } = useContext(GlobalContext);
    const addToFavorites = () => {
        const isFavorite = favorites.some((fav) => fav.nombre === receta.nombre);

        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav.nombre !== receta.nombre));

            toast.error(`${receta.nombre} ha sido eliminada de tus favoritos`);
        } else {
            setFavorites([...favorites, receta]);

            toast.success(`${receta.nombre} ha sido agregada a tus favoritos`);
        }
    };
    const isFavorite = favorites.some((fav) => fav.nombre === receta.nombre);

    return (
        <div className="contenedor-card">
            <div>
                <img className="imagen-card" src={receta.imagen} alt="imagenreceta"></img>
                <div className="caja">
                    <h4 className="titulo-caja">{receta.nombre}</h4>
                    <NavLink to={`/${receta.nombre}`}>
                        <button className="btn-caja">Ver más</button>
                    </NavLink>
                </div>
            </div>
            <div className="iconos">
                <button className="iconos-card favorites" onClick={addToFavorites}>
                    <BookmarkIcon
                        sx={{
                            fontSize: 30,
                            fill: isFavorite ? "#cb997e" : "#ffe8d6",
                            margin: "0 1rem",
                            "&:hover": {
                                fill: "pink",
                                cursor: "pointer",
                            },
                        }}
                    />
                </button>
            </div>
        </div>
    );
};

export default Card;
