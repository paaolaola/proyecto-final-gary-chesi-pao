import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import "../components/Card";
import "../views/Home";
import Table from "react-bootstrap/Table";
import { toast } from "react-toastify";
/* import "../assets/css/Perfil.css"; */

const Perfil = () => {
    const { logout, currentUser, favorites, recetas, setCurrentUser } = useContext(GlobalContext);
    const navigate = useNavigate();

    // State para manejar la edición de datos
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState({
        nombre: currentUser?.nombre || "",
        apellido: currentUser?.apellido || "",
        edad: currentUser?.edad || "",
        email: currentUser?.email || "",
        fotoURL: currentUser?.fotoURL || "",
    });

    // Función para manejar el cambio en los campos editables
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = () => {
        setCurrentUser((prev) => ({ ...prev, ...editedUser }));
        setIsEditing(false);
        toast.success("Cambios guardados exitosamente");
    };

    return (
        <>
            <main className="contenedor-perfil ">
                <Link to="/">
                    <button className="btn-global">Volver al home</button>
                </Link>
                <div className="seccion-perfil">
                    <h1 className="titulo-perfil">{currentUser ? currentUser.user : "Invitado"}</h1>
                    <div className="profile-main">
                        <div className="profile-img-cont">
                            <img src={currentUser?.fotoURL} alt="Imagen de perfil" className="profile-image" />
                            <div className="profile-info">
                                {isEditing ? (
                                    <>
                                        <input type="text" id="nombre" name="nombre" value={editedUser.nombre} onChange={handleInputChange} />
                                        <input type="text" id="apellido" name="apellido" value={editedUser.apellido} onChange={handleInputChange} />
                                        <input type="number" id="edad" name="edad" value={editedUser.edad} onChange={handleInputChange} />
                                        <input type="text" id="email" name="email" value={editedUser.email} onChange={handleInputChange} />
                                    </>
                                ) : (
                                    <>
                                        <p>{currentUser?.nombre}</p>
                                        <p>{currentUser?.apellido}</p>
                                        <p>Edad: {currentUser?.edad}</p>
                                        <p>{currentUser?.email}</p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="profile-favorites">
                            <p className="nombre-ayuda">Mis Recetas Favoritas</p>
                            <div className="favorites-cont">
                                {favorites.length === 0 ? (
                                    <p className="texto-condic">Aún no agregas recetas favoritas.</p>
                                ) : (
                                    favorites.map((favorito) => (
                                        <Link to={`/${favorito.nombre}`} key={favorito.nombre} onClick={() => navigate(`/favorito/${favorito.nombre}`)}>
                                            <div key={favorito.nombre} className="favorite-card">
                                                <img src={favorito.imagen} alt={favorito.nombre} />
                                                <p>{favorito.nombre}</p>
                                                <p>{favorito.tipo}</p>
                                            </div>
                                        </Link>
                                    ))
                                )}
                            </div>
                        </div>

                        <div className="profile-mis-recetas">
                            <p className="nombre-ayuda">Mis Creaciones</p>
                            {recetas.length === 0 ? (
                                <p className="texto-condic">Aún no has creado recetas.</p>
                            ) : (
                                <Table className="recipe-table" striped bordered hover responsive>
                                    <thead className="thead-table">
                                        <tr>
                                            <th>Número</th>
                                            <th>Nombre</th>

                                            <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recetas.map((receta, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <Link to={`/${receta.nombre}`} onClick={() => navigate(`/receta/${receta.nombre}`)}>
                                                        {receta.nombre}
                                                    </Link>
                                                </td>

                                                <td>{receta.tipo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                            <Link to="/nueva-receta">
                                <button className="btn-global">Crear Receta</button>
                            </Link>
                        </div>
                    </div>

                    <div className="profile-buttons">
                        {isEditing ? (
                            <>
                                <button className="save-button" onClick={handleSaveChanges}>
                                    Guardar
                                </button>
                                <button className="cancel-button" onClick={() => setIsEditing(false)}>
                                    Cancelar
                                </button>
                            </>
                        ) : (
                            <button className="edit-button" onClick={() => setIsEditing(true)}>
                                Editar
                            </button>
                        )}

                        <Link to="/login">
                            <button className="btn-logout" onClick={logout}>
                                Cerrar Sesión
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Perfil;
