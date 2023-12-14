import Galeria from "../components/Galeria";

const Home = () => {
    return (
        <>
            <div>
                <h1 className="titulo-home">ENCUENTRA TUS RECETAS DE COCINA PARA PREPARAR TUS COMIDAS FAVORITAS</h1>
            </div>
            <div className="contenedor-home">
                <Galeria />
            </div>
        </>
    );
};

export default Home;
