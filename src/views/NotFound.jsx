import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <main className="contenedor-notfound">
            <div className="seccion-notfound">
                <h2>Página no encontrada</h2>
                <Link to="/">
                    <button className="btn-404">Volver a la página principal</button>
                </Link>
            </div>
        </main>
    );
};

export default NotFound;
