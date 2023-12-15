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
			<div className="grid-content">
				<div className="buscador-content">
					<Buscador />
				</div>

				<div className="barra-lateral">
					<Navbar />
				</div>

				<div className="main-content">
					<Router />
				</div>
				<div className="footer-content">
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
