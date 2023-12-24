import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import OrdenarRecetas from "./OrdenarRecetas";

const Buscador = () => {
    const { setTextoBusqueda, currentUser } = useContext(GlobalContext);

    const handleSearchChange = (e) => {
        setTextoBusqueda(e.target.value);
    };

    return (
        <>
            <div className="contenedor-busq">
                <form className="form-busq">
                    <input type="search" placeholder="Busca tus recetas" onChange={handleSearchChange}></input>
                    <OrdenarRecetas />
                </form>
                <div className="user-div">
                    <NavLink to="/perfil">
                        <p className="user-text">Bienvenido, {currentUser ? currentUser.user : "Invitado"}</p>
                    </NavLink>
                    <NavLink to="/perfil">
                        <div className="user-container">
                            {currentUser && currentUser.fotoURL ? (
                                <img src={currentUser.fotoURL} alt="Imagen de usuario" className="user-image" />
                            ) : (
                                <img
                                    src="https://cdn.icon-icons.com/icons2/2483/PNG/512/user_icon_149851.png"
                                    alt="Imagen de usuario predeterminada"
                                    className="user-image"
                                />
                            )}
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Buscador;
