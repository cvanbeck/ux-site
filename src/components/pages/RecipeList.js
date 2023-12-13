// This component is used for both dispalying the latest recipes page and showing your favourited recipes
// Favourited recipes is passed a filtered version of the recip[e list of only ones you are wishing to save]

import { MiniRecipe } from "../MiniRecipe";

const RecipeList = ({ recipes, pageText, onClick }) => {
    console.log(recipes)
    return (
        <div>
            <img src="./images/recipePageBackground.png"></img>
            <h2>{pageText}</h2>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate</div>
            {recipes.map(recipe =>
                <MiniRecipe
                    key={recipe[1].id}
                    recipe={recipe[1]}
                    onClick={onClick} />
            )}
        </div>
    )
}

export default RecipeList
