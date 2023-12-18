import Galeria from "../components/Galeria";

const Home = () => {
	return (
		<>
			<div className="fondo-home">
				{" "}
				<h1 className="titulo-home">
					ENCUENTRA TUS RECETAS DE COCINA PARA PREPARAR TUS COMIDAS
					FAVORITAS
				</h1>
				<div className="contenedor-home">
					<div></div>
					<Galeria />
				</div>
			</div>
		</>
	);
};

export default Home;
