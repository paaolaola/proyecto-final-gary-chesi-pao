/* import "../assets/css/Perfil.css"; */
import "../components/Card";
import Card from "../components/Card";
import "../views/Home";

const Perfil = () => {
  return (
    <>
      <main className="contenedor-ayuda ">
        <div className="seccion-ayuda">
          <h1 className="titulo-ayuda">Mi Perfil</h1>
          <div className="profile-main">
            <div className="profile-img-cont">
              <img className="profile-img" src="../public/img/gorro-chef.png" alt="" />
            </div>
            <div className="profile-desc">
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
