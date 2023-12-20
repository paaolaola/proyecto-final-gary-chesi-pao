import { useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { GlobalContext } from "../context/GlobalProvider";
import Card from "../components/Card";

const RecetasFavoritas = () => {
  const navigate = useNavigate();
  const { favorites } = useContext(GlobalContext);
  const irAtras = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className="fondo-favoritas">
      <button className="btn-global" onClick={(e) => irAtras(e)}>
        Volver atrás
      </button>

      <div className="contenedor-home">
        <div>
          <h1 className="titulo-favoritas">Tus Recetas Favoritas</h1>
        </div>
        <div className="galeria-favoritas">
          {/* <div className="contenedor-favoritas">
                        <div>
                            <img className="imagen-favoritas" src="../img/pexels-1.jpg" alt="imagenreceta"></img>

                            <div className="caja">
                                <h4 className="titulo-caja">NOMBRE RECETA</h4>
                                <p className="texto-favoritas">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab laudantium, veniam inventore impedit ipsum molestiae
                                    dignissimos eligendi dolorum ipsa dolor, blanditiis aspernatur vero magnam iusto architecto praesentium, veritatis dolorem?
                                </p>
                                <NavLink to="/home/:nombre">
                                    <button className="btn-caja">Ver más</button>
                                </NavLink>
                            </div>
                        </div>

                        <div className="iconos">
                            <button className="iconos-card">
                                <BookmarkBorderIcon
                                    sx={{
                                        fontSize: 30,
                                        color: "#ffe8d6",
                                        margin: "0 1rem",
                                    }}
                                />
                            </button>
                        </div>
                    </div> */}
          <div className="galeria">{favorites && favorites.map((receta, index) => <Card key={index} receta={receta} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default RecetasFavoritas;
