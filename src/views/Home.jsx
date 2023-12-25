import Galeria from "../components/Galeria";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
    return (
        <>
            <div className="fondo-home">
                {" "}
                <div className="contenedor-home">
                    <h1 className="titulo-home">Encuentra recetas de cocina para preparar tus comidas favoritas</h1>
                    <div></div>
                    <Galeria />
                    <ScrollToTop />
                </div>
            </div>
        </>
    );
};

export default Home;
