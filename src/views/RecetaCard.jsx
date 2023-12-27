import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { toast } from "react-toastify";

const RecetaCard = () => {
  const { data, setFavorites, favorites } = useContext(GlobalContext);
  const { nombre } = useParams();
  const [receta, setReceta] = useState(null);

  const navigate = useNavigate();
  const irAtras = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    // Buscar la receta por el nombre en los datos
    const recetaEncontrada = data.find((r) => r.nombre === nombre);
    setReceta(recetaEncontrada);
  }, [data, nombre]);

  if (!receta) {
    return <p>Cargando...</p>;
  }

  const addToFavorites = () => {
    const isFavorite = favorites.some((fav) => fav.nombre === receta.nombre);

    if (isFavorite) {
      setFavorites(favorites.filter((fav) => fav.nombre !== receta.nombre));

      toast.error(`${receta.nombre} ha sido eliminada de tus favoritos`);
    } else {
      setFavorites([...favorites, receta]);

      toast.success(`${receta.nombre} ha sido agregada a tus favoritos`);
    }
  };
  const isFavorite = favorites.some((fav) => fav.nombre === receta.nombre);

  return (
    <>
      <main className="contenedor-detalle">
        <button className="btn-global" onClick={(e) => irAtras(e)}>
          Volver atrás
        </button>
        <div className="seccion-card">
          <h1 className="titulo-ayuda">{receta.nombre}</h1>
          <div className="detalle-receta-main">
            <div className="detalle-receta-proceso">
              <h2 className="nombre-ayuda">¡Cocinemos!</h2>
              <div className="detalle-receta-detalles">
                <div className="detalle-receta-ingredientes">
                  <h3>Ingredientes</h3>
                  <ul>
                    {receta.ingredientes.map((ingrediente, index) => (
                      <li key={index}>{ingrediente}</li>
                    ))}
                  </ul>
                </div>
                <div className="detalle-receta-instrucciones">
                  <h3>Preparación</h3>
                  <ol>
                    {receta.preparacion.split("\n").map((instruccion, index) => (
                      <li key={index}>{instruccion}</li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <div className="detalle-receta-img">
              <h3>Video/Imagen</h3>
              {receta.video_youtube ? (
                <iframe
                  width="360"
                  height="215"
                  src={receta.video_youtube}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <img className="receta-card-img" src={receta.imagen} alt="Imagen de la receta" />
              )}
            </div>
            <div className="detalle-receta-descripcion">
              <h3>Descripcion</h3>
              <h5>{receta.tipo}</h5>
              <p>{receta.descripcion}</p>
            </div>
          </div>
          <div className="fav-btn-container">
            <button className={`btn-add-favorites ${isFavorite ? "favorito" : ""}`} onClick={addToFavorites}>
              {isFavorite ? "Eliminar de Favoritos" : "Añadir a Favoritos"}
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecetaCard;
