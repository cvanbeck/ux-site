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

const SearchBar = () => {
    return (
        <div>
            <img src={"/images/searchIcon.png"} alt="Magnifiying glass search icon"></img>
            <div>Search</div>
        </div>
    )
}

export default Header