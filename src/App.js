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
  const homepageData = [christmasSpecials, loadRecipePage]

  return (
    <div>
      <Homepage recipeLineInfo={homepageData}></Homepage>
    </div>
  );
}

export default App;
