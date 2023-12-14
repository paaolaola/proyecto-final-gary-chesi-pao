import React from "react";

const Footer = () => {
    return (
        <footer>
            <div className="footer-1">
                <h4>SUSCRÍBETE</h4>
                <h5 className="texto-footer">PARA RECIBIR LAS ÚLTIMAS RECETAS</h5>
                <form className="form-footer">
                    <input type="email" name="email" placeholder="TU CORREO"></input>
                    <button className="btn-footer">Enviar</button>
                </form>
            </div>

            <div className="footer-2">RECETAPP. 2023. TODOS LOS DERECHOS RESERVADOS</div>
        </footer>
    );
};

export default Footer;
