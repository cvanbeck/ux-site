const MiniRecipeLine = (recipes) => {
    return
}

const MiniRecipe = ({ recipe }) => {
    return (
        <button>
            <img src={`images/${recipe.image}`}alt={recipe.alt} width="200px" ></img>
            <div id="number">{recipe.id}</div>
            <div id="title">{recipe.recipename}</div>
            <div id="description">{recipe.brief}</div>
        </button>
    )
}

export default MiniRecipe