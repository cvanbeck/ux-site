import "./css/searchbar.css"

const SearchBar = () => {
    return (
        <div className="searchbar">
            <img width="20px" src={"/images/searchIcon.png"} alt="Magnifiying glass search icon"></img>
            <div>Search</div>
        </div>
    )
}

export default SearchBar