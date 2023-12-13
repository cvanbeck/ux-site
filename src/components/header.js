import SearchBar from "./searchbar"

const Header = ({ onClick }) => {
    return (
        <div>
            <img src={"/images/logo.png"} alt="Goldfish logo, fork tree combination with recupes made simple tag"></img>
            <NavMenu onClick={onClick}></NavMenu>
            <SearchBar></SearchBar>
        </div>
    )
}

const NavMenu = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick[0]}>Home</button>
            <button onClick={onClick[1]}>Recipes</button>
            <button onClick={onClick[2]}>Favourites</button>
        </div>
    )
}


export default Header