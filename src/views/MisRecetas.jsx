const MisRecetas = () => {
    const recipes = [
        {
            name: "Receta 1",
            ingredients: "Ingrediente 1, Ingrediente 2",
            type: "Tipo A",
        },
        {
            name: "Receta 2",
            ingredients: "Ingrediente 3, Ingrediente 4",
            type: "Tipo B",
        },
        // ... otras recetas
    ];
    return (
        <>
            <div className="back-form-2">
                <div className="seccion-receta-2">
                    <h1 className="titulo-receta">Tus Recetas</h1>
                    <div className="recipe-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Número</th>
                                    <th>Nombre</th>
                                    <th>Ingredientes</th>
                                    <th>Tipo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recipes.map((recipe, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{recipe.name}</td>
                                        <td>{recipe.ingredients}</td>
                                        <td>{recipe.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MisRecetas;
