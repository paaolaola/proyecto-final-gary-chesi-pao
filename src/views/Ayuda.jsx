const Ayuda = () => {
    return (
        <main className="contenedor-ayuda ">
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
                <p>Las imágenes deben tener la extensión JPEG y no deben pesar más de 1mb. Los videos deben estar en formato mp4 y pesar menos de 7mb.</p>

                <h3 className="mail-ayuda">Si no hemos podido responder todas tus dudas, escríbenos a ayuda@recetapp.cl</h3>
            </div>
        </main>
    );
};

export default Ayuda;
