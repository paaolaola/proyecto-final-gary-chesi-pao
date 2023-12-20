/*dudas con este componente, podemos hacer la galeria en home*/
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import Card from "./Card";

const Galeria = () => {
	const { data, setData } = useContext(GlobalContext);

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
