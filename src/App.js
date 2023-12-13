import { useState } from 'react'

import recipesJson from "./recipes.json"

import { MiniRecipeLine } from "./components/MiniRecipe";
import Homepage from "./components/pages/homepage"
import RecipeList from "./components/pages/RecipeList"
import Header from "./components/header"
import Footer from "./components/footer"
import RecipePage from './components/pages/recipePage';

 

function App() {
  const [recipes, setRecipes] = useState(recipesJson.recipeList) // Loads recupes into state
  const [currentPage, setCurrentPage] = useState("homepage")

  const [recipePage, setRecipePage] = useState(null)

  const christmasSpecials = [recipes.chestnut, recipes.roastDinner, recipes.christmasPudding]
  const homemadeClassics = []
  
  
  const allRecipes  = Object.entries(recipes)
  const homepageData = [christmasSpecials]

  function homepageButton() {
    setCurrentPage("homepage")
  }
  
  function allRecipesPageButton() {
    setCurrentPage("latestRecipes")
  }
  function favouritesPageButton() {
    setCurrentPage("favourites")

  }

  function recipePageButton( recipe ){
    setRecipePage(recipe)
    setTimeout(() => {
      setCurrentPage('recipe')
    }, 1)

    console.log(recipePage)

  }

  const renderContent = () => {
    switch (currentPage) {
      case 'homepage':
        return <Homepage recipeLineInfo={homepageData} onClick={recipePageButton} />
      case 'latestRecipes':
        return  <RecipeList recipes={allRecipes} pageText={"Latest Recipes"} onClick={recipePageButton}/>
      case 'favourites':
        return <RecipeList recipes={allRecipes} pageText={"Favourite Recipes"} onClick={recipePageButton} />
      case ('recipe'):
        return <RecipePage recipe={recipePage} recipes={christmasSpecials} onClick={recipePageButton} />
      default:
        return
  }}
  
  
const navButtonHandlers = [homepageButton, allRecipesPageButton, favouritesPageButton]



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