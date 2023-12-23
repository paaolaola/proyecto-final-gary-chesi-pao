import "./assets/scss/App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Buscador from "./components/Buscador";
import Footer from "./components/Footer";
import GlobalProvider from "./context/GlobalProvider";
import Carusel from "./components/Carusel";

import NavbarColapse from "./components/NavbarColapse";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterViews from "./router/RouterViews";

/*falta agregar el provider*/
const App = () => {
	const [isNavbarOpen, setNavbarOpen] = useState(true);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const toggleNavbar = () => {
		setNavbarOpen(!isNavbarOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<ToastContainer
				position="top-center" // Configura la posición de los toasts
				autoClose={1000} // Configura la duración en milisegundos (3 segundos en este ejemplo
				newestOnTop={true}
				closeOnClick // Cierra el toast haciendo clic en él
			/>
			<GlobalProvider>
				<BrowserRouter>
					<div className="grid-content">
						<div className="carusel">
							<Carusel />
						</div>
						<div className="buscador-content">
							<Buscador />
						</div>

						<div className="barra-lateral">
							{windowWidth > 700 ? (
								// Renderiza Navbar para pantallas grandes
								<Navbar onToggle={toggleNavbar} />
							) : (
								// Renderiza NavbarCollapse para pantallas pequeñas
								isNavbarOpen && (
									<NavbarColapse onClose={toggleNavbar} />
								)
							)}
						</div>

						<div className="main-content">
							<RouterViews />
						</div>
						<div className="footer-content">
							<Footer />
						</div>
					</div>
				</BrowserRouter>
			</GlobalProvider>
		</>
	);
};

export default App;
