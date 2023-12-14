import "./css/MiniRecipe.css"

export const MiniRecipeLine = ({ recipes, title, onClick }) => {
    return (
        <div className="recipeLine">
            <h3>{title}</h3>
            <div id="recipes">
                {recipes.map(recipe =>
                    <MiniRecipe
                        key={recipe.id}
                        recipe={recipe}
                        onClick={() => { onClick(recipe) }} />
                )}
            </div>
        </div>
    )
}

export const MiniRecipe = ({ recipe, number, onClick }) => {

    return (
        <div className="content">
            <button className="miniRecipe" onClick={() => { onClick(recipe) }} >
                <img src={`images/${recipe.image}`} alt={recipe.alt} width="200px" ></img>
                <div id="number">{number}</div>
                <div id="title">{recipe.recipename}</div>
                <div id="description">{recipe.brief}</div>
            </button>
        </div>
    )
}
