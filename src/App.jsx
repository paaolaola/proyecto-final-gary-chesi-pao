import "./assets/scss/App.scss";
import { BrowserRouter } from "react-router-dom";
import Router from "./router/Router";
import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import Footer from "./components/Footer";
import GlobalProvider from "./context/GlobalProvider";
import Carusel from "./components/Carusel";

/*falta agregar el provider*/
const App = () => {
	return (
		<GlobalProvider>
			<BrowserRouter>
				{" "}
				<div className="grid-content">
					<div className="carusel">
						<Carusel />
					</div>
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
		</GlobalProvider>
	);
};

export default App;
