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
  const [favourites, setFavourites] = useState([])

  const christmasSpecials = [recipes.chestnut, recipes.roastDinner, recipes.christmasPudding]
  const homemadeClassics = []
  
  
  const allRecipes  = Object.entries(recipes)
  const allFavourites = Object.entries(favourites)
  const homepageData = [christmasSpecials]
  
  function homepageButton() {
    window.scrollTo(0, 0, "instant")
    setCurrentPage("homepage")
  }
  
  function allRecipesPageButton() {
    window.scrollTo(0, 0, "instant")
    setCurrentPage("latestRecipes")
  }
  function favouritesPageButton() {
    window.scrollTo(0, 0, "instant")
    setCurrentPage("favourites")
  }
  
  function recipePageButton( recipe ){
    window.scrollTo(0, 0, "instant")
    setRecipePage(recipe)
    setTimeout(() => {
      setCurrentPage('recipe')
    }, 1)
  }
  
  function addFavourite(recipe){
    if (favourites.includes(recipe)){
      console.log("DOOP")
      return
    }
    const newFavourites = [...favourites, recipe]
    setFavourites(newFavourites)
  }

  const navButtonHandlers = [homepageButton, allRecipesPageButton, favouritesPageButton, recipePageButton, addFavourite]
  window.scrollTo(0, 0, "instant")

  const renderContent = () => {
    switch (currentPage) {
      case 'homepage':
        return <Homepage recipeLineInfo={homepageData} onClick={recipePageButton} />
      case 'latestRecipes':
        return  <RecipeList recipes={allRecipes} pageText={"Latest Recipes"} onClick={recipePageButton}/>
      case 'favourites':
        return <RecipeList recipes={allFavourites} pageText={"Favourite Recipes"} onClick={recipePageButton} />
      case ('recipe'):
        return <RecipePage recipe={recipePage} recipes={christmasSpecials} onClick={navButtonHandlers} favourites={allFavourites} />
      default:
        return
  }}
  




  return (
    <div>
      <Header onClick={navButtonHandlers}></Header>
      {/*<RecipePage recipe={recipes.chestnut} recipes={christmasSpecials} ></RecipePage>*/}
      {renderContent()}
      <Footer onClick={navButtonHandlers}></Footer>
    </div>
  );
}

export default App


// Homepage, RecipeList (Favourites and all recipes), RecipePage, Footer, Header