import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
            <div>
                <h1 className="titulos-global">INGRESA A RECETAPP</h1>
            </div>

            <div className="contenedor-login">
                <div className="form">
                    <form>
                        <div className="receta-form">
                            <input type="text " id="" placeholder="Usuario o correo electrónico"></input>
                        </div>
                        <div className="receta-form">
                            <input type="password" id="" placeholder="******"></input>
                        </div>
                        <button className="btn-global" type="submit">
                            Ingresar
                        </button>
                    </form>
                    <h5>
                        No tienes una cuenta? <Link to="/registro">Regístrate.</Link>
                    </h5>
                </div>
            </div>
        </>
    );
};

export default Login;
