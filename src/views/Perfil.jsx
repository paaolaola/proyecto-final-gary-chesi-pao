import { Link } from "react-router-dom";
import Card from "../components/Card";
import "../components/Card";
import "../views/Home";
/* import "../assets/css/Perfil.css"; */

const Perfil = () => {
    return (
        <>
            <main className="contenedor-perfil ">
                <Link to="/">
                    <button className="btn-global">Volver al home</button>
                </Link>
                <div className="seccion-perfil">
                    <h1 className="titulo-ayuda">Mi Perfil</h1>
                    <div className="profile-main">
                        <div className="profile-img-cont">
                            <img className="profile-img" src="img/gorro-chef.png" alt="" />
                        </div>
                        <div className="profile-desc">
                            <div className="btn-mod">
                                <button>Modificar datos</button>
                            </div>
                            <p className="nombre-ayuda">Descripción</p>
                            <p>Usuario: NombreUsuario</p>
                            <p>Edad: XXX años</p>
                            <p>Recetas Publicadas: XXX</p>
                        </div>
                        <div className="profile-favorites">
                            <p className="nombre-ayuda">Mis Recetas Favoritas</p>
                            <div className="profile-favorites-cont">
                                <Card />
                                <Card />
                            </div>
                        </div>
                        <div className="profile-mis-recetas">
                            <p className="nombre-ayuda">Mis Creaciones</p>
                            <div className="profile-mis-recetas-cont">
                                <Card />
                                <Card />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Perfil;
