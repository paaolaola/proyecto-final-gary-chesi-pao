import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalProvider";
import Table from "react-bootstrap/Table";
const MisRecetas = () => {
    const { recetas } = useContext(GlobalContext);
    return (
        <>
            <div className="back-form-2">
                <Link to="/">
                    <button className="btn-global">Volver al home</button>
                </Link>
                <div className="seccion-receta-2">
                    <h1 className="titulo-receta">Tus Recetas</h1>

                    <Table className="recipe-table" striped bordered hover responsive>
                        <thead className="thead-table">
                            <tr>
                                <th>Número</th>
                                <th>Nombre</th>
                                <th>Ingredientes</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recetas.map((receta, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{receta.nombre}</td>
                                    <td>{receta.ingredientes}</td>
                                    <td>{receta.tipo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
};

export default MisRecetas;
