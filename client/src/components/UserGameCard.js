import {useHistory} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Card, Container, Image, Button} from 'semantic-ui-react'

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
            setUserGames(userGames.filter(aGame => aGame.id !== game.id))
          }
        })
      }

    const gamesReviews = reviews.filter((review) => review.game && review.game.id == id)

    let reviewId = ""
    if(gamesReviews[0]){
        reviewId = gamesReviews[0].id
    }

    let theReview = []


    

    const theGamesReviews = gamesReviews.map((review) => {
        theReview = reviews.find((aReview) => aReview.id == review.id)
            if(review.content){
                if(theReview.user.id == user.id) {
                    let stars = ''
                    let starsNum = review.user_rating
                    while(starsNum > 0){
                        stars += '⭐'
                        starsNum -= 1
                    }
                    return(
                        <div key = {review.id}>
                            <h4>{review.content} {stars}</h4>
                            <Button name = {review.id} onClick = {handleEditReview}>edit review</Button>
                        </div>
                    )
                }
            }
            else{
                return(<Button name = {reviewId} onClick = {handleAddReview}>Add a Review</Button>)
            } 
    })


    return(
        <Container>
        <Card>
            <Card.Content>
                <div className = "game-card">
                    <Card.Header>
                        name: {name}
                    </Card.Header>
                    image: <Image size = "massive" 
                    floated = "left" 
                    src = {background_img} 
                    onClick = {handleGameClick} 
                    name = {id} 
                    alt = {name}/>
                    <Card.Description> released: {released} </Card.Description>
                    {/* <img style ={{width: 300}}name = {id} onClick = {handleGameClick} src = {background_img} alt = {name}></img> */}

                    <Card.Description> rating: {rating * 5}/5 </Card.Description>
                    <Card.Description> platforms: {platforms} </Card.Description>
                    <Button name = {id} onClick = {handleDeleteReview}>Remove from List</Button>
                    <Card.Description>
                    <p>reviews:</p>
                    {theGamesReviews}
                    </Card.Description>
                </div>
            </Card.Content>
        </Card>
        </Container>
    )
}

export default UserGameCard