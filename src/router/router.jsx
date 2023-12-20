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
import ProtectedRoute from "../components/ProtectedRoute";

const router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/ayuda" element={<Ayuda />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home/:nombre"
        element={
          <ProtectedRoute>
            <RecetaCard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/perfil"
        element={
          <ProtectedRoute>
            <Perfil />
          </ProtectedRoute>
        }
      />
      <Route
        path="/favoritas"
        element={
          <ProtectedRoute>
            <RecetasFavoritas />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mis-recetas"
        element={
          <ProtectedRoute>
            <MisRecetas />
          </ProtectedRoute>
        }
      />
      <Route
        path="/nueva-receta"
        element={
          <ProtectedRoute>
            <AgregarReceta />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
