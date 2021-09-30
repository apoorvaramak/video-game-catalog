import GamesContainer from './GamesContainer'

function SearchResults({userGames, setUserGames, searchedGames, setUser, user, setReviews, reviews, setGames}){

    return(
        <GamesContainer userGames = {userGames} setUserGames = {setUserGames} games = {searchedGames} setGames = {setGames} reviews = {reviews} setReviews = {setReviews} user = {user} setUser = {setUser}/>
    )

}

export default SearchResults