import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";

const RecetaCard = () => {
	const { data } = useContext(GlobalContext);
	const { nombre } = useParams();
	const [receta, setReceta] = useState(null);

	useEffect(() => {
		// Buscar la receta por el nombre en los datos
		const recetaEncontrada = data.find((r) => r.nombre === nombre);
		setReceta(recetaEncontrada);
	}, [data, nombre]);

	if (!receta) {
		return <p>Cargando...</p>;
	}

	return (
		<>
			<main className="contenedor-detalle">
				<div className="seccion-ayuda">
					<h1 className="titulo-ayuda">{receta.nombre}</h1>
					<div className="detalle-receta-main">
						<div className="detalle-receta-proceso">
							<h2 className="nombre-ayuda">Cocinemos!</h2>
							<div className="detalle-receta-detalles">
								<div className="detalle-receta-ingredientes">
									<h3>Ingredientes</h3>
									<ul>
										{receta.ingredientes.map(
											(ingrediente, index) => (
												<li key={index}>
													{ingrediente}
												</li>
											)
										)}
									</ul>
								</div>
								<div className="detalle-receta-instrucciones">
									<h3>Preparación</h3>
									<ol>
										{receta.preparacion
											.split("\n")
											.map((instruccion, index) => (
												<li key={index}>
													{instruccion}
												</li>
											))}
									</ol>
								</div>
							</div>
						</div>

						<div className="detalle-receta-img">
							<h2 className="nombre-ayuda">Video/Imagen</h2>
							{receta.video_youtube ? (
								<iframe
									width="360"
									height="215"
									src={receta.video_youtube}
									title="YouTube video player"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
								></iframe>
							) : (
								<img
									className="receta-card-img"
									src={receta.imagen}
									alt="Imagen de la receta"
								/>
							)}
						</div>
						<div className="detalle-receta-descripcion">
							<h2 className="nombre-ayuda">Descripcion</h2>
							<p>{receta.descripcion}</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default RecetaCard;
