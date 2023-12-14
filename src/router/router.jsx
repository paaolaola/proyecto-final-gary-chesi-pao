import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Login from "../views/Login";
import Registro from "../views/Registro";
import Perfil from "../views/Perfil";
import RecetaCard from "../views/RecetaCard";
import RecetasFavoritas from "../views/RecetasFavoritas";
import AgregarReceta from "../views/AgregarReceta";
import MisRecetas from "../views/MisRecetas";
import Ayuda from "../views/Ayuda";
import NotFound from "../views/NotFound";

const router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home/:nombre" element={<RecetaCard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/favoritas" element={<RecetasFavoritas />} />
            <Route path="/mis-recetas" element={<MisRecetas />} />
            <Route path="/nueva-receta" element={<AgregarReceta />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default router;
