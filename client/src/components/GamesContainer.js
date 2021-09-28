import GamesList from './GamesList'

function GamesContainer({setUserGames, userGames, reviews, setReviews, user, setUser, games, setGames}){
    return(
        <GamesList setUserGames = {setUserGames} userGames = {userGames} setReviews = {setReviews} reviews = {reviews} user = {user} setUser = {setUser} games = {games} setGames = {setGames}/>
    )
}

export default GamesContainer