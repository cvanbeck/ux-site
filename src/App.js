import { useState } from 'react'
import MiniRecipe from "./components/MiniRecipe";
import recipesJson from "./recipes.json"



function App() {
  const [recipes, setRecipes] = useState(recipesJson.recipeList) // Loads recupes into state
  const [favourites, setFavourites] = useState([])
  console.log(recipes)


  return (
    <div>
      <MiniRecipe recipe={recipes.chestnut}></MiniRecipe>
      <MiniRecipe recipe={recipes.roastDinner}></MiniRecipe>
    </div>
  );
}

export default App;
