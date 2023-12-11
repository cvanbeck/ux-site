import { useState } from 'react'
import MiniRecipe from "./components/MiniRecipe";
import data from "./recipes.json"



function App() {
  const [recipes, setRecipes] = useState(data.data) // Loads recupes into state
  const [favourites, setFavourites] = useState([])
  console.log(recipes)


  return (
    <MiniRecipe recipe={recipes}></MiniRecipe>
  );
}

export default App;
