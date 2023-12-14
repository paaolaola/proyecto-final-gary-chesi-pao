import { Link } from "react-router-dom";

const Registro = () => {
    return (
        <>
            <div>
                <h1 className="titulos-global">REGÍSTRATE EN RECETAPP</h1>
            </div>

            <div className="contenedor-reg">
                <div className="form">
                    <form>
                        <div className="receta-form">
                            <input type="text " id="" placeholder="Usuario"></input>
                        </div>
                        <div className="receta-form">
                            <input type="email " id="" placeholder="nombre@ejemplo.com"></input>
                        </div>
                        <div className="receta-form">
                            <input type="password" id="" placeholder="******"></input>
                        </div>
                        <div className="receta-form">
                            <input type="password" id="" placeholder="******"></input>
                        </div>
                        <button className="btn-global" type="submit">
                            Registrarme
                        </button>
                    </form>
                    <h5>
                        Ya tienes una cuenta? <Link to="/login">Inicia sesión.</Link>
                    </h5>
                </div>
            </div>
        </>
    );
};

export default Registro;
