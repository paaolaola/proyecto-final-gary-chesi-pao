import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import { toast } from "react-toastify";

const Registro = () => {
  const navigate = useNavigate();
  const { addNewUser } = useContext(GlobalContext);

  const [newUser, setNewUser] = useState({
    user: "",
    password: "",
    confirmPassword: "",
    nombre: "",
    apellido: "",
    edad: "",
    email: "",
    fotoURL: "", // Campo para la URL de la foto
  });

  const handleRegister = (e) => {
    e.preventDefault();
    /*         const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlPattern.test(newUser.fotoURL)) {
            toast.error("Ingrese una URL de foto válida");
            return;
        } */
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    const imageExtensions = /\.(jpg|jpeg|png|gif|bmp)$/i; // Extensiones de imagen permitidas

    if (!urlPattern.test(newUser.fotoURL)) {
      toast.error("Ingrese una URL de foto válida");
      return;
    }

    if (!imageExtensions.test(newUser.fotoURL)) {
      toast.error("La URL debe apuntar a una imagen válida (jpg, jpeg, png, gif, bmp)");
      return;
    }

    // Si llegas a este punto, la URL es válida y apunta a una imagen válida

    // Validaciones u otras operaciones necesarias antes de agregar el nuevo usuario
    if (newUser.password.length >= 5 && newUser.password === newUser.confirmPassword) {
      // Agregar lógica para almacenar el nuevo usuario
      addNewUser({
        user: newUser.user,
        password: newUser.password,
        nombre: newUser.nombre,
        apellido: newUser.apellido,
        edad: newUser.edad,
        email: newUser.email,
        fotoURL: newUser.fotoURL,
      });

      // Restablecer el estado para limpiar los campos después de registrar
      setNewUser({
        user: "",
        password: "",
        confirmPassword: "",
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        fotoURL: "",
      });

      // Puedes redirigir a la página de inicio de sesión si es necesario
      toast.success("Registro completado con éxito");
      navigate("/login");
    } else {
      // Mostrar un mensaje de error o manejar la no coincidencia de contraseñas
      if (newUser.password.length < 5) {
        toast.error("La contraseña debe tener al menos 5 caracteres");
      } else {
        toast.error("Las contraseñas no coinciden");
      }
    }
  };

  return (
    <>
      <div>
        <h1 className="titulos-global">REGÍSTRATE EN RECETAPP</h1>
      </div>

      <div className="contenedor-reg">
        <div className="form">
          <form onSubmit={handleRegister}>
            <div>
              <div className="receta-form">
                <input
                  type="text"
                  placeholder="Nombre"
                  value={newUser.nombre}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      nombre: e.target.value,
                    })
                  }
                />
              </div>
              <div className="receta-form">
                <input
                  type="text"
                  placeholder="Apellido"
                  value={newUser.apellido}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      apellido: e.target.value,
                    })
                  }
                />
              </div>
              <div className="receta-form">
                <input
                  type="number"
                  placeholder="Edad"
                  value={newUser.edad}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      edad: e.target.value,
                    })
                  }
                />
              </div>
              <div className="receta-form">
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="receta-form">
                <input
                  type="text"
                  placeholder="URL de la foto de perfil"
                  value={newUser.fotoURL}
                  onChange={(e) =>
                    setNewUser({
                      ...newUser,
                      fotoURL: e.target.value,
                    })
                  }
                />
              </div>
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
              <button type="submit" className="btn-global">
                Registrar
              </button>
            </div>
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
