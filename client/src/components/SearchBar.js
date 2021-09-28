import {useState} from 'react'

function SearchBar({games, setSearchValue, searchValue, setSearchedGames, searchedGames}){


    function handleSearch(event){
        setSearchValue(event.target.value)
        // const newGames = games.filter((game) => game.name.includes(event.target.value))
        setSearchedGames(games.filter((game) => game.name.includes(event.target.value)))
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <form onSubmit = {handleSubmit}>
            <input type = "text" value = {searchValue} onChange = {handleSearch} placeholder="search here..."/>
            <button type = "submit">submit</button>
        </form>
    )
}

export default SearchBar