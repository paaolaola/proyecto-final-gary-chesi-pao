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
          <div className="galeria">{favorites && favorites.map((receta, index) => <Card key={index} receta={receta} />)}</div>
        </div>
      </div>
    </div>
  );
};

export default RecetasFavoritas;
