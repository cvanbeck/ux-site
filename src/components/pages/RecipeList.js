import { MiniRecipe } from "../MiniRecipe";

const RecipeList = ({ recipes, pageText }) => {

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
                    onClick={null} />
            )}
        </div>
    )
}

export default RecipeList

// To do, this is functionally the same as the favourite page. All that changes os the text in the h2 tag and what recipes get displayed.