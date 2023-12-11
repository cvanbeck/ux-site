import { useState } from 'react'
import { MiniRecipeLine } from "./components/MiniRecipe";
import recipesJson from "./recipes.json"

const loadRecipePage = (recipe) => {
  console.log(recipe)
}

function App() {
  const [recipes, setRecipes] = useState(recipesJson.recipeList) // Loads recupes into state
  const [currentPage, setCurrentPage] = useState("homepage.js")
  const [favourites, setFavourites] = useState([])
  const [recipePage, setRecipePage] = useState(null)

  const christmasSpecials = [recipes.chestnut, recipes.roastDinner]
  const homemadeClassics = []

  return (
    <div>
      <MiniRecipeLine recipes={christmasSpecials} title={"Christmas Specials"} onClick={loadRecipePage}></MiniRecipeLine>
    </div>
  );
}

export default App;
