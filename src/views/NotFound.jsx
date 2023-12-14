import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="container-404">
            <h2>Página no encontrada</h2>
            <Link to="/">
                <button className="btn-404">Volver a la página principal</button>
            </Link>
        </div>
    );
};

export default NotFound;
