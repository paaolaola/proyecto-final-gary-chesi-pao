import { useNavigate, Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import { toast } from "react-toastify";

const Registro = () => {
	const navigate = useNavigate();

	const { addNewUser } = useContext(GlobalContext);
	const [newUser, setNewUser] = useState({
		user: "",
		password: "",
		confirmPassword: "",
	});
	const handleRegister = () => {
		// Validaciones u otras operaciones necesarias antes de agregar el nuevo usuario
		if (newUser.password === newUser.confirmPassword) {
			addNewUser({
				user: newUser.user,
				password: newUser.password,
			});
			// Restablecer el estado para limpiar los campos
			setNewUser({
				user: "",
				password: "",
				confirmPassword: "",
			});
			// Redirigir a la página de inicio de sesión si es necesario
			toast.success("registro completado con exito");
			navigate("/login");
			// Puedes usar 'navigate' aquí si estás utilizando React Router
		} else {
			// Mostrar un mensaje de error o manejar la no coincidencia de contraseñas
			toast.error("Las contraseñas no coinciden");
		}
	};
	return (
		<>
			<div>
				<h1 className="titulos-global">REGÍSTRATE EN RECETAPP</h1>
			</div>

			<div className="contenedor-reg">
				<div className="form">
					<form>
						<div>
							<div className="receta-form">
								<input
									type="text"
									placeholder="Usuario"
									value={newUser.user}
									onChange={(e) =>
										setNewUser({
											...newUser,
											user: e.target.value,
										})
									}
								/>
							</div>
							<div className="receta-form">
								<input
									type="password"
									placeholder="Contraseña"
									value={newUser.password}
									onChange={(e) =>
										setNewUser({
											...newUser,
											password: e.target.value,
										})
									}
								/>
							</div>
							<div className="receta-form">
								<input
									type="password"
									placeholder="Confirmar Contraseña"
									value={newUser.confirmPassword}
									onChange={(e) =>
										setNewUser({
											...newUser,
											confirmPassword: e.target.value,
										})
									}
								/>
							</div>
							<button
								type="submit"
								className="btn-global"
								onClick={handleRegister}
							>
								Registrar
							</button>
						</div>
					</form>
					<h5>
						Ya tienes una cuenta?{" "}
						<Link to="/login">Inicia sesión.</Link>
					</h5>
				</div>
			</div>
		</>
	);
};

export default Registro;
