import SearchBar from "./searchbar"

const Footer = () => {
    return (
        <div>
            <img src={"/images/logo.png"} alt="Goldfish logo, fork tree combination with recipes made simple tag"></img>
            <NavColumn></NavColumn>
            <SearchBar></SearchBar>
        </div>
    )
}

const NavColumn = () => {
    return (
        <div>
            <button>Home</button>
            <button>Recipes</button>
            <button>Favourites</button>
        </div>
    )
}

export default Footer