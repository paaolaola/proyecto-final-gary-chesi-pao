import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import Footer from "./components/Footer";

/*falta agregar el provider*/
const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Buscador />
            <Router />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
