import { NavLink, useNavigate } from "react-router-dom";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Card = () => {
    const navigate = useNavigate();
    const handleClick = (nombre) => {
        const route = `/home/${nombre}`;
        navigate(route);
    };

    return (
        <div className="contenedor-card">
            <div>
                <img className="imagen-card" src="../img/pexels-1.jpg" alt="imagenreceta"></img>

                <div className="caja">
                    <h4 className="titulo-caja">NOMBRE RECETA</h4>
                    <NavLink to="/home/:nombre">
                        <button className="btn-caja">Ver más</button>
                    </NavLink>
                </div>
            </div>
            <div className="iconos">
                <button className="iconos-card">
                    <BookmarkBorderIcon
                        sx={{
                            fontSize: 30,
                            color: "#ffe8d6",
                            margin: "0 1rem",
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
