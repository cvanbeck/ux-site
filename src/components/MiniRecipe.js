export const MiniRecipeLine = ({ recipes, title, onClick }) => {
    return (
        <div>
            <h3>{title}</h3>
            {recipes.map(recipe =>
                <MiniRecipe
                    key={recipe.id}
                    recipe={recipe}
                    onClick={onClick} />
            )}
        </div>
    )
}

export const MiniRecipe = ({ recipe, number, onClick }) => {
    return (
        <button onClick={onClick} >
            <img src={`images/${recipe.image}`} alt={recipe.alt} width="200px" ></img>
            <div id="number">{number}</div>
            <div id="title">{recipe.recipename}</div>
            <div id="description">{recipe.brief}</div>
        </button>
    )
}
