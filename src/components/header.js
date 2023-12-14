import SearchBar from "./searchbar"
import "./css/header.css"

const Header = ({ onClick }) => {
    return (
        <div className="header">
            <img id="logo" src={"/images/logo.png"} alt="Goldfish logo, fork tree combination with recupes made simple tag"></img>
            <NavMenu onClick={onClick}></NavMenu>
            <SearchBar></SearchBar>
        </div>
    )
}

const NavMenu = ({ onClick }) => {
    return (
        <div className="navmenu">
            <button id="one"onClick={onClick[0]}>Home</button>
            <button onClick={onClick[1]}>Recipes</button>
            <button id="three" onClick={onClick[2]}>Favourites</button>
        </div>
    )
}


export default Header