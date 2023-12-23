import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
	const navigate = useNavigate();
	const { logout, loginData, setSession, setCurrentUser, currentUser } =
		useContext(GlobalContext);
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);

	// Función para manejar el inicio de sesión
	const login = (e) => {
		e.preventDefault(); // Evitar el comportamiento por defecto del formulario

		// Obtener usuario y contraseña del estado
		const isValidUser = loginData.some(
			(userData) =>
				userData.user === user && userData.password === password
		);

		if (isValidUser) {
			sessionStorage.setItem("token", "test_gary");

			setSession(true); // Establecer el estado de la sesión
			// Obtener el objeto de usuario actual
			const currentUser = loginData.find(
				(userData) =>
					userData.user === user && userData.password === password
			);

			// Establecer el usuario actual en el contexto
			setCurrentUser(currentUser);

			toast.success("Inicio de sesión correcto");

			// Redirigir después del inicio de sesión exitoso
			navigate("/");
		} else {
			setSession(false); // Asegurar que la sesión se establezca en false en caso de error
			toast.error("Usuario o contraseña incorrecto(s)");
		}
	};

	return (
		<>
			<div>
				<h1 className="titulos-global">INGRESA A RECETAPP</h1>
			</div>

			<div className="contenedor-login">
				<div className="form">
					<form onSubmit={login}>
						<div className="receta-form">
							<input
								type="text"
								placeholder="Usuario o correo electrónico"
								value={user}
								onChange={(e) => setUser(e.target.value)}
							/>
						</div>
						<div className="receta-form">
							<input
								type="password"
								placeholder="******"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<button className="btn-global" type="submit">
							Ingresar
						</button>
						{error && (
							<small>* Usuario o contraseña incorrecto(s)</small>
						)}
					</form>
					<h5>
						No tienes una cuenta?{" "}
						<Link to="/registro">Regístrate.</Link>
					</h5>{" "}
					{currentUser && (
						<Link to="/login">
							<button className="btn-global" onClick={logout}>
								Cerrar Sesión
							</button>
						</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Login;
