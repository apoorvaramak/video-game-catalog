import GamesContainer from './GamesContainer'

function SearchResults({searchedGames, setUser, user, setReviews, reviews, setGames}){

    console.log(searchedGames, "searchedGames")

    return(
        <GamesContainer games = {searchedGames} setGames = {setGames} reviews = {reviews} setReviews = {setReviews} user = {user} setUser = {setUser}/>
    )

}

export default SearchResults