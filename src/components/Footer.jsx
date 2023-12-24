import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div>
                <div className="footer-1">
                    <NavLink to="/registro">
                        <h4>SUSCRÍBETE</h4>
                    </NavLink>

                    <h4 className="texto-footer">PARA RECIBIR LAS ÚLTIMAS RECETAS</h4>
                </div>
                <div className="footer-2">
                    <p>RECETAPP. 2023. TODOS LOS DERECHOS RESERVADOS</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
