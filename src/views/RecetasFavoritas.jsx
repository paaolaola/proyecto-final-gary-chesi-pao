import { Link } from "react-router-dom";
import { useContext } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { GlobalContext } from "../context/GlobalProvider";
import Card from "../components/Card";

const RecetasFavoritas = () => {
    const { favorites } = useContext(GlobalContext);

    return (
        <div className="fondo-favoritas">
            <Link to="/">
                <button className="btn-global">Volver al home</button>
            </Link>

            <div className="contenedor-home">
                <div>
                    <h1 className="titulo-favoritas">Tus Recetas Favoritas</h1>
                </div>
                <div className="galeria-favoritas">
                    <div className="galeria">{favorites && favorites.map((receta, index) => <Card key={index} receta={receta} />)}</div>
                </div>
            </div>
        </div>
    );
};

export default RecetasFavoritas;
