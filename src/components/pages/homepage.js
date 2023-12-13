import { MiniRecipeLine } from "../MiniRecipe"

const Homepage = ({ recipeLineInfo, onClick }) => {
    const christmasSpecials = recipeLineInfo[0]
    const buttonAction = recipeLineInfo[1]

    return (
        <div>
            <WelcomeScreen></WelcomeScreen>
            <MiniRecipeLine recipes={christmasSpecials} title={"Christmas Specials"} onClick={onClick}></MiniRecipeLine>
            <div>LOREM IPSUM</div>
        </div>
    )
}

const WelcomeScreen = () => {
    return (
        <div>
            <img src={"/images/background.png"} alt="Christmas dinner table" width="100%"></img>
            <h1>Homemade Recipes To</h1>
            <h1>Warm You Up This Winter</h1>
        </div>
    )
}

export default Homepage


// Mini recipline layout
// <MiniRecipeLine recipes={christmasSpecials} title={"Christmas Specials"} onClick={loadRecipePage}></MiniRecipeLine>
//             <MiniRecipeLine recipes={recipeLineInfo.specials} title={"Christmas Specials"} onClick={recipeLineInfo[1]}></MiniRecipeLine>