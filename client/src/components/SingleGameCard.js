import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import GameCard from './GameCard'
import {Button} from 'semantic-ui-react'

function SingleGameCard({userGames, setUserGames, setReviews, reviews, user, games}){

    const history = useHistory();

    const [game, setGame] = useState("")
    const [toDelete, setToDelete] = useState([])
    const params = useParams();

    useEffect(() => {
        fetch(`/games/${params.id}`)
        .then(response => response.json())
        .then(data => setGame(data))
    }, [])
    


    let isUserGame = false
    if(user.games){
        user.games.forEach(game => {
            if(game.id == params.id){
                isUserGame = true
            }
        })

    }

    function handleRemoveGame(event){
        event.preventDefault()
        const deletedReview = {user_id: user.id, game_id: event.target.name}
        fetch(`/reviews/${event.target.name}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        }).then(response => response.json())
        .then(data => console.log(data))
    }

    function handleUserClick(event){
        history.push(`/user/${event.target.value}`)
    }



    let theReviews = ""
    if(game.reviews && reviews[0]){
    theReviews = game.reviews.map((review) => {
        const aReview = reviews.filter((aReview) => aReview.id == review.id)
        if(review.content){
        return(
            <div key = {review.id} className = "single-game-reviews">
                <h4>review: {review.content} - {aReview[0].user.username}</h4> 
                <div className = "review-button">
                <Button value = {aReview[0].user.id} onClick = {handleUserClick}> Visit User Profile</Button>
                </div> 
            </div>
        )}
    })}





    
    return(
        <div className = "game-card">
            <div className = "single-game-card">
            {game ? <GameCard user = {user} setUserGames = {setUserGames} userGames = {userGames} reviews = {reviews} setReviews = {setReviews} game = {game} key = {game.id} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms}/> : ""}
            </div>
            {theReviews}
            <br/>
            <div className = "game-button">
            {isUserGame ? <Button name = {game.id} onClick = {handleRemoveGame}>Remove from Wishlist</Button> : ""}
            </div>
        </div>
    )
}

export default SingleGameCard