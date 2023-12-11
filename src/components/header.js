import SearchBar from "./searchbar"

const Header = () => {
    return (
        <div>
            <img src={"/images/logo.png"} alt="Goldfish logo, fork tree combination with recupes made simple tag"></img>
            <NavMenu></NavMenu>
            <SearchBar></SearchBar>
        </div>
    )
}

const NavMenu = () => {
    return (
        <div>
            <button>Home</button>
            <button>Recipes</button>
            <button>Favourites</button>
        </div>
    )
}


export default Header