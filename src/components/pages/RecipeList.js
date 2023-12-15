// This component is used for both dispalying the latest recipes page and showing your favourited recipes
// Favourited recipes is passed a filtered version of the recip[e list of only ones you are wishing to save]

import { MiniRecipe } from "../MiniRecipe";
import "./css/RecipeList.css"

const RecipeList = ({ recipes, pageText, onClick, image }) => {
    console.log(recipes)
    return (
        <div className="recipeList">
            <div className="introContainer">
                <img id="bigImage" src={`./images/${image}`}></img>
                <div id="textContainer">
                    <h2>{pageText}</h2>
                </div>
            </div>
            <div className="recipeContainer">
                <div id={"innerContainer"}>
                    {recipes.map(recipe =>
                        <MiniRecipe className={"recipes"}
                            key={recipe[1].id}
                            recipe={recipe[1]}
                            onClick={onClick} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default RecipeList
