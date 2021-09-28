import {useParams, useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import GameCard from './GameCard'

function SingleGameCard({setReviews, reviews, user, games}){

    const history = useHistory();
    console.log(reviews, "the reviews")

    const [game, setGame] = useState("")
    const [toDelete, setToDelete] = useState([])
    const params = useParams();
    console.log(params.id)
    console.log(games)

    useEffect(() => {
        fetch(`/games/${params.id}`)
        .then(response => response.json())
        .then(data => setGame(data))
    }, [])
    


    let isUserGame = false
    if(user.games){
        console.log('exists')
        user.games.forEach(game => {
            console.log(params.id, "params")
            console.log(game.id, "ids")
            if(game.id == params.id){
                console.log(isUserGame, "user game")
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
        console.log(event.target, "event target")
        history.push(`/user/${event.target.value}`)
    }



    let theReviews = ""
    console.log(game.reviews)
    if(game.reviews && reviews[0]){
    theReviews = game.reviews.map((review) => {
        const aReview = reviews.filter((aReview) => aReview.id == review.id)
        console.log(reviews.filter((aReview) => aReview.id == review.id), "a review")
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
            {game ? <GameCard reviews = {reviews} setReviews = {setReviews} game = {game} key = {game.id} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms}/> : ""}
            {theReviews}
            {isUserGame ? <button name = {game.id} onClick = {handleRemoveGame}>Remove from Wishlist</button> : ""}
        </div>
    )
}

export default SingleGameCard