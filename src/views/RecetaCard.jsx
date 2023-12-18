import "../assets/css/RecetaCard.css";

const RecetaCard = () => {
  return (
    <>
      <div className="home-container"></div>
      <main className="contenedor-ayuda ">
        <div className="seccion-ayuda">
          <h1 className="titulo-ayuda">NOMBRE DE LA RECETA</h1>
          <div className="detalle-receta-main">
            <div className="detalle-receta-proceso">
              <h2 className="nombre-ayuda">Vamos a cocinar!</h2>
              <div className="detalle-receta-detalles">
                <div className="detalle-receta-ingredientes">
                  <h3>Ingredientes</h3>
                  <ul>
                    <li>Ingrediente A</li>
                    <li>Ingrediente B</li>
                    <li>Ingrediente C</li>
                  </ul>
                </div>
                <div className="detalle-receta-instrucciones">
                  <h3>Instrucciones</h3>
                  <ol>
                    <li>Instruccion A</li>
                    <li>Instruccion B</li>
                    <li>Instruccion C</li>
                    <li>Instruccion D</li>
                    <li>Instruccion E</li>
                    <li>Instruccion F</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className="detalle-receta-img">
              <h2 className="nombre-ayuda">Video/Imagen</h2>
              <img className="receta-card-img" src="https://th.bing.com/th/id/OIP.uZrthEYBxMj2HhkODlJAdQHaEK?w=328&h=184&c=7&r=0&o=5&pid=1.7" alt="" />
            </div>
            <div className="detalle-receta-descripcion">
              <h2 className="nombre-ayuda">Descripcion</h2>
              <p>Esta es la descripcion de la receta, que seguro sera muy rica</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RecetaCard;
