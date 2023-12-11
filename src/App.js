import { useState } from 'react'

import recipesJson from "./recipes.json"

import { MiniRecipeLine } from "./components/MiniRecipe";
import Homepage from "./components/pages/homepage"
import Header from "./components/header"
import Footer from "./components/footer"


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
      <Header></Header>
      <Homepage recipeLineInfo={homepageData}></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
