import { useState } from 'react'

import recipesJson from "./recipes.json"

import { MiniRecipeLine } from "./components/MiniRecipe";
import Homepage from "./components/pages/homepage"
import RecipeList from "./components/pages/RecipeList"
import Header from "./components/header"
import Footer from "./components/footer"
import RecipePage from './components/pages/recipePage';




const loadHomepage = () => {
  return
}

const loadFavourites = () => {
  return
}

const loadRecipePage = () => {
  return
}

const loadAllRecipes = () => {
  return
}


function App() {
  const [recipes, setRecipes] = useState(recipesJson.recipeList) // Loads recupes into state
  const [currentPage, setCurrentPage] = useState("homepage")

  const allRecipes  = Object.entries(recipes)

  const [favourites, setFavourites] = useState(allRecipes[0])
  const [recipePage, setRecipePage] = useState(null)
  
  const christmasSpecials = [recipes.chestnut, recipes.roastDinner, recipes.christmasPudding]
  const homemadeClassics = []


  const homepageData = [christmasSpecials, loadRecipePage]

  function homepageButton() {
    setCurrentPage("homepage")
  }
  
  function recipePageButton() {
    setCurrentPage("recipes")
  }
  function favouritesPageButton() {
    setCurrentPage("favourites")
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'homepage':
        return <Homepage recipeLineInfo={homepageData} />
      case 'recipes':
        return  <RecipeList recipes={allRecipes} pageText={"Latest Recipes"} />
      case 'favourites':
        return <RecipeList recipes={allRecipes} pageText={"Favourite Recipes"} />
      default:
        return
  }}
  
  
const navButtonHandlers = [homepageButton, recipePageButton, favouritesPageButton]



  return (
    <div>
      <Footer onClick={navButtonHandlers}></Footer>
      {/*<RecipePage recipe={recipes.chestnut} recipes={christmasSpecials} ></RecipePage>*/}
      {renderContent()}
    </div>
  );
}

export default App


// Homepage, RecipeList (Favourites and all recipes), RecipePage, Footer, Header