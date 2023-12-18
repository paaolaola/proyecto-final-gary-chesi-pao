import Galeria from "../components/Galeria";

const Home = () => {
    return (
        <>
            <div className="fondo-home">
                {" "}
                <div className="contenedor-home">
                    <h1 className="titulo-home">Encuentra recetas de cocina para preparar tus comidas favoritas</h1>
                    <div></div>
                    <Galeria />
                </div>
            </div>
        </>
    );
};

export default Home;
