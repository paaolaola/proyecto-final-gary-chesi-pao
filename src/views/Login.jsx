import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  //recordar que este login es estático.
  const loginData = {
    user: "admin",
    password: "admin123",
  };

  const login = (e) => {
    e.preventDefault();

    // 1- Pedir el archivo JSON
    // 2- Buscar el usuario
    // 3- Revisar si la contraseña coincide para ese usuario
    // 4.1- Si esta OK -> Se hace el login
    // 4.2- Si no, manejamos el error

    if (user === loginData.user && password === loginData.password) {
      sessionStorage.setItem("token", "test_gary");
      console.log("localstorageasdasd", localStorage);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div>
        <h1 className="titulos-global">INGRESA A RECETAPP</h1>
      </div>

      <div className="contenedor-login">
        <div className="form">
          <form onSubmit={(e) => login(e)}>
            <div className="receta-form">
              <input type="text " id="" placeholder="Usuario o correo electrónico" onChange={(e) => setUser(e.target.value)}></input>
            </div>
            <div className="receta-form">
              <input type="password" id="" placeholder="******" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button className="btn-global" type="submit">
              Ingresar
            </button>
            {error && <small>* Usuario o contraseña incorrecto(s)</small>}
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
