import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import "../components/Card";
import "../views/Home";
import Table from "react-bootstrap/Table";
/* import "../assets/css/Perfil.css"; */

const Perfil = () => {
    const { logout, currentUser, favorites, recetas } = useContext(GlobalContext);
    const navigate = useNavigate();
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
                            <p>Agrega una foto</p>
                        </div>

                        <div className="profile-favorites">
                            <p className="nombre-ayuda">Mis Recetas Favoritas</p>
                            <div className="favorites-cont">
                                {favorites.length === 0 ? (
                                    <p className="texto-condic">Aún no agregas recetas favoritas.</p>
                                ) : (
                                    favorites.map((favorito) => (
                                        <Link to={`/home/${favorito.nombre}`} onClick={() => navigate(`/favorito/${favorito.nombre}`)}>
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
                                                    <Link to={`/home/${receta.nombre}`} onClick={() => navigate(`/receta/${receta.nombre}`)}>
                                                        {receta.nombre}
                                                    </Link>
                                                </td>

                                                <td>{receta.tipo}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                            <div className="profile-mis-recetas-cont"></div>
                        </div>
                    </div>
                    <Link to="/login">
                        <button className="btn-logout" onClick={logout}>
                            Cerrar Sesión
                        </button>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Perfil;
