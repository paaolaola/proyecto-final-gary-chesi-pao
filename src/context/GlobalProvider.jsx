import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

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
    const [currentUser, setCurrentUser] = useState(null);

    const [loginData, setLoginData] = useState([
        {
            user: "admin",
            password: "admin123",
        },
        {
            user: "chesi",
            password: "chesi",
        },
    ]);
    const addNewUser = (newUser) => {
        setLoginData((prevLoginData) => [...prevLoginData, newUser]);
    };
    const [session, setSession] = useState(false);

    const logout = () => {
        sessionStorage.removeItem("token");
        setSession(false);
        setCurrentUser(null);
        toast.error("Cerraste sesión"); // Actualizar el estado de la sesión
        // Puedes agregar lógica adicional aquí si es necesario
    };

    const state = {
        data,
        setData,
        recetas,
        setRecetas,
        agregarReceta,
        favorites,
        setFavorites,
        busqueda,
        setBusqueda,
        textoBusqueda,
        setTextoBusqueda,
        loginData,
        addNewUser,
        logout,
        setSession,
        currentUser,
        setCurrentUser,
    };

    return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
