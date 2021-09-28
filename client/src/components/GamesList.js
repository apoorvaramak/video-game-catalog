import GameCard from './GameCard'

function GamesList({reviews, game, setUserGames, userGames, setReviews, user, setUser, games, setGames}){
    
    let gamelist = ''
    console.log(games, "games")
    if(games){
    gamelist = games.map((game) => {
        return < GameCard key = {game.id} setUserGames = {setUserGames} userGames = {userGames} game = {game} setReviews = {setReviews} reviews = {reviews} user = {user} setUser = {setUser} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms}/>
    })}

    return(
        <>
        {gamelist}
        </>
    )
}

export default GamesList