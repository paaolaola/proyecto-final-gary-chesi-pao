import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Galeria from "../components/Galeria";
import ScrollToTop from "../components/ScrollToTop";

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
                    {favorites.length === 0 ? (
                        <p className="texto-condic">Aún no agregas recetas.</p>
                    ) : (
                        <>
                            <Galeria />
                            <ScrollToTop />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecetasFavoritas;
