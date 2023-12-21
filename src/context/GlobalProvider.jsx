import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [ordered, setOrdered] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  const [textoBusqueda, setTextoBusqueda] = useState("");

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

  const [recetas, setRecetas] = useState([]);

  // Función para agregar una nueva receta al estado
  const agregarReceta = (nuevaReceta) => {
    setRecetas([...recetas, nuevaReceta]);
    setData([...data, nuevaReceta]);
    console.log(data);
  };

  const state = { data, setData, recetas, setRecetas, agregarReceta, favorites, setFavorites, busqueda, setBusqueda, textoBusqueda, setTextoBusqueda };

  return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
