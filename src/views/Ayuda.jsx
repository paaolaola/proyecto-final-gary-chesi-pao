import { Link } from "react-router-dom";

const Ayuda = () => {
    return (
        <main className="contenedor-ayuda ">
            <Link to="/">
                <button className="btn-global">Volver al home</button>
            </Link>
            <div className="seccion-ayuda">
                <h1 className="titulo-ayuda">Preguntas Frecuentes</h1>

                <p className="nombre-ayuda">Recetas</p>
                <li>¿Qué recetas puedo encontrar en Recetapp?</li>
                <p>
                    Puedes encontrar recetas por categoría vegetariana, vegana, carne o mixta. Para eso puedes usar el buscador y filtrar por categoria o
                    ingredientes.{" "}
                </p>

                <p className="nombre-ayuda ">Perfil</p>
                <li className="texto-ayuda">Siempre es obligatorio crearse un perfil para ver las recetas?</li>
                <p>Si, es obligatorio, ya que si no inicias sesión o te registras no podrás hacer uso de la página.</p>
                <li className="texto-ayuda ">¿Qué contiene mi sección de perfil?</li>
                <p>Tu perfil incluye secciones como: Tus datos y tu foto, Recetas favoritas y las recetas que tu has creado.</p>
                <p className="nombre-ayuda ">Recetas favoritas</p>
                <li className="texto-ayuda ">¿Cual es el máximo de recetas que puedo agregar a favoritos?</li>
                <p>No hay cantidad mínima o máxima para agregar tus favoritos. Tu sólo disfruta de las que más puedas! </p>
                <p className="nombre-ayuda ">Subida de archivos</p>
                <li className="texto-ayuda ">En qué formato deben estar las imágenes o videos que quiera subir?</li>
                <p>
                    Tanto para las imágenes como para los videos debes agregar un link URL. En el caso de los videos la URL debe ser un embed proveniente de
                    Youtube, es decir, el link directo del video que lo puedes encontrar en el botón de "Compartir" En la lista de opciones para compartir,
                    luego haz clic en "Incorporar" desde la misma plataforma.
                </p>

                <h5 className="mail-ayuda">Si no hemos podido responder todas tus dudas, escríbenos a ayuda@recetapp.cl</h5>
            </div>
        </main>
    );
};

export default Ayuda;
