/*dudas con este componente, podemos hacer la galeria en home*/
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Card from "./Card";

const Galeria = () => {
	const { data, setData } = useContext(GlobalContext);

	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("../data/recetas.json"); // Reemplaza '/api/recipes' con la ruta correcta de tu archivo JSON
				if (!response.ok) {
					throw new Error("Error al cargar los datos");
				}

				const jsonData = await response.json();
				setData(jsonData);

				// Puedes realizar otras acciones con los datos, como actualizar el estado del componente.
			} catch (error) {
				setError(error.message);
			}
		};

		fetchData(); // Llamada a la función al montar el componente
	}, []);
	console.log(data);
	return (
		<>
			<div className="galeria">
				{data &&
					data.map((receta, index) => (
						<Card key={index} receta={receta} />
					))}
			</div>
		</>
	);
};

export default Galeria;
