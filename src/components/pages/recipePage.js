// RecipePage requies: A recipe to display, and an array of Recipes to show in a line 

import { MiniRecipeLine } from "../MiniRecipe"

const RecipePage = ({recipe, recipes, onClick}) => {
    return(
        <div>
            <img src={`images/${recipe.image}`} alt={recipe.alt} width="200px" ></img>
            <div>
                <HistoryBar recipe={recipe} onClick={onClick}></HistoryBar>
                <RatingBar></RatingBar>
                <FavouriteButton></FavouriteButton>
                <IngredientList recipe={recipe}></IngredientList>
            </div>
            <Instructions recipe={recipe}></Instructions>
            <MiniRecipeLine recipes={recipes} title={"You May Also Like"} onClick={onClick[3]}></MiniRecipeLine>
        </div>

    )
}

const HistoryBar = ({ recipe, onClick }) => {
    return(
        <div>
            <button onClick={onClick[0]}>Home</button>
            <button onClick={onClick[1]}>Recipes</button>
            <button >{recipe.recipename}</button>
        </div>
    )
}

const RatingBar = ({recipe}) => {
    return (
        <div>5/5</div>
    )
}

const FavouriteButton = ({ recipe }) => {
    return (
        <div>
            <button>Favourite</button>
        </div>
    )

}

const IngredientList = ({ recipe }) => {
    const ingredientList = recipe.ingredients

    return (
        <div>
            <h3>Ingredients</h3>
            <ul>
                {ingredientList.map(ingredient =>
                    <IngredientLine
                        ingredient={ingredient} />
                )}
            </ul>
        </div>
    )
}

const IngredientLine = ({ ingredient }) => {
    return(
        <li>{ingredient}</li>
    )
}

const Instructions = ({ recipe }) => {
    return (
        <div>
            <h2>How to Make</h2>
            <div>{recipe.instructions}</div>
        </div>
    )
}

export default RecipePage

//  {recipe.ingredients.map(ingredient =>
//<InstructionLine key={ingredient} instruction={ingredient}/>
//)}