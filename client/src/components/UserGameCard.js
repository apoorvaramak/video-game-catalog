import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
function UserGameCard({reviews, setUserGames, userGames, setReviews, user, setUser, handleAddReview, game, id, name, released, background_img, rating, platforms}){
    let history = useHistory()

    function handleEditReview(event){
        event.preventDefault()
        history.push(`/reviews/${event.target.name}/edit`)
    }
    function handleGameClick(event){
        history.push(`/games/${event.target.name}`)
    }

    function handleDeleteReview(event){
        console.log(reviews, "reviews after")
        let deletedReview = reviews.filter((review) => review.game.id == event.target.name)
        fetch(`/reviews/${deletedReview[0].id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        }).then((r) => {
          if(r.ok){
            setReviews(reviews.filter((review) => review.id !== deletedReview[0].id));
            console.log(reviews, "reviews before")
            setUserGames(userGames.filter(aGame => aGame.id !== game.id))
          }
        })
      }

    const gamesReviews = reviews.filter((review) => review.game && review.game.id == id)

    let reviewId = ""
    if(gamesReviews[0]){
        reviewId = gamesReviews[0].id
    }

    let theReview = ""

    

    const theGamesReviews = gamesReviews.map((review) => {
        theReview = reviews.find((aReview) => aReview.id == review.id)
            if(review.content){
                if(theReview.user.id == user.id) {
                    return(
                        <div key = {review.id}>
                            <h4>{review.content}, {review.user_rating} stars</h4>
                            <button name = {review.id} onClick = {handleEditReview}>edit review</button>
                        </div>
                    )
                }
            }
            else{
                return(<button name = {reviewId} onClick = {handleAddReview}>Add a Review</button>)
            } 
    })

    console.log(user, "updated user?")


    return(
        <>
        <div className = "game-card">
            name: {name}
            released: {released}
            <img style ={{width: 300}}name = {id} onClick = {handleGameClick} src = {background_img} alt = {name}></img>
            rating: {rating * 5}/5
            platforms: {platforms}
            <button name = {id} onClick = {handleDeleteReview}>Remove from List</button>
          <p>reviews:</p>
            {theGamesReviews}
        </div>
        </>
    )
}

export default UserGameCard