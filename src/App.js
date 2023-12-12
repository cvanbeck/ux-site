import { useState } from 'react'

import recipesJson from "./recipes.json"

import { MiniRecipeLine } from "./components/MiniRecipe";
import Homepage from "./components/pages/homepage"
import RecipeList from "./components/pages/RecipeList"
import Header from "./components/header"
import Footer from "./components/footer"
import RecipePage from './components/pages/recipePage';


const loadRecipePage = (recipe) => {
  console.log(recipe)
}


function App() {
  const [recipes, setRecipes] = useState(recipesJson.recipeList) // Loads recupes into state
  const [currentPage, setCurrentPage] = useState("homepage.js")
  const [favourites, setFavourites] = useState([])
  const [recipePage, setRecipePage] = useState(null)

  
  const christmasSpecials = [recipes.chestnut, recipes.roastDinner, recipes.christmasPudding]
  const homemadeClassics = []
  const homepageData = [christmasSpecials, loadRecipePage]
  
  const allRecipes  = Object.entries(recipes)
  return (
    <div>
      <RecipePage recipe={recipes.christmasPudding} recipes={christmasSpecials} ></RecipePage>
    </div>
  );
}

export default App


// Homepage, RecipeList (Favourites and all recipes), RecipePage, Footer, Header