import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";

const MisRecetas = () => {
	const { recetas } = useContext(GlobalContext);
	return (
		<>
			<div className="back-form-2">
				<Link to="/">
					<button className="btn-global">Volver al home</button>
				</Link>
				<div className="seccion-receta-2">
					<h1 className="titulo-receta">Tus Recetas</h1>
					<div className="recipe-table">
						<table>
							<thead>
								<tr>
									<th>Número</th>
									<th>Nombre</th>
									<th>Ingredientes</th>
									<th>Tipo</th>
								</tr>
							</thead>
							<tbody>
								{recetas.map((receta, index) => (
									<tr key={index}>
										<td>{index + 1}</td>
										<td>{receta.nombre}</td>
										<td>{receta.ingredientes}</td>
										<td>{receta.tipo}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default MisRecetas;
