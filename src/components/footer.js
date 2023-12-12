import SearchBar from "./searchbar"

const Footer = ({ onClick }) => {
    return (
        <div>
            <img src={"/images/logo.png"} alt="Goldfish logo, fork tree combination with recipes made simple tag"></img>
            <NavColumn onClick={onClick}></NavColumn>
            <SearchBar></SearchBar>
        </div>
    )
}

const NavColumn = ({ onClick }) => {

    return (
        <div>
            <button onClick={onClick[0]}>Home</button>
            <button onClick={onClick[1]}>Recipes</button>
            <button onClick={onClick[2]}>Favourites</button>
        </div>
    )
}

export default Footer