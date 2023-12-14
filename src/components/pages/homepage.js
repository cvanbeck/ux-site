import { MiniRecipeLine } from "../MiniRecipe"
import "./css/homepage.css"

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
        <div className="welcomeScreen">
            <img id="backgroundImage" src={"/images/background.png"} alt="Christmas dinner table" width="100%"></img>
            <div id="textContainer">
                <h1>Homemade Recipes To</h1>
                <h1 className="orangeText">Warm You Up This Winter</h1>
                <button>Latest Recipes</button>
            </div>
        </div>
    )
}

export default Homepage


// Mini recipline layout
// <MiniRecipeLine recipes={christmasSpecials} title={"Christmas Specials"} onClick={loadRecipePage}></MiniRecipeLine>
//             <MiniRecipeLine recipes={recipeLineInfo.specials} title={"Christmas Specials"} onClick={recipeLineInfo[1]}></MiniRecipeLine>