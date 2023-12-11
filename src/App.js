import { useState } from 'react'
import { MiniRecipeLine } from "./components/MiniRecipe";
import recipesJson from "./recipes.json"
import Homepage from "./components/pages/homepage"

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
      <Homepage specials={christmasSpecials}></Homepage>
    </div>
  );
}

export default App;
