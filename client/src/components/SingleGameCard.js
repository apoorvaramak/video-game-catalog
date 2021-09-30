import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import GameCard from './GameCard'

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
            <div key = {review.id}>
                <h4>review: {review.content} - {aReview[0].user.username}</h4>
                <button value = {aReview[0].user.id} onClick = {handleUserClick}> Visit User Profile</button>
            </div>
        )}
    })}





    
    return(
        <div>
            {game ? <GameCard user = {user} setUserGames = {setUserGames} userGames = {userGames} reviews = {reviews} setReviews = {setReviews} game = {game} key = {game.id} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms}/> : ""}
            {theReviews}
            {isUserGame ? <button name = {game.id} onClick = {handleRemoveGame}>Remove from Wishlist</button> : ""}
        </div>
    )
}

export default SingleGameCard