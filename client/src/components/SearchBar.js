import {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import '../index.css'

function SearchBar({games, setSearchValue, searchValue, setSearchedGames, searchedGames}){


    function handleSearch(event){
        setSearchValue(event.target.value)
        // const newGames = games.filter((game) => game.name.includes(event.target.value))
        setSearchedGames(games.filter((game) => game.name.toLowerCase().includes(event.target.value.toLowerCase())))
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return(
        <Form onSubmit = {handleSubmit} className = "search-form">
            <Form.Group>
            <input type = "text" value = {searchValue} onChange = {handleSearch} placeholder="search here..."/>
            <div className = "search-bar">
            <Button type = "submit">submit</Button>
            </div>
            </Form.Group>
        </Form>
    )
}

export default SearchBar