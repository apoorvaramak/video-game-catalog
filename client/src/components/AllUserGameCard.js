import {useHistory} from 'react-router-dom'
import {Card, Image, Container} from 'semantic-ui-react'

function AllUserGameCard({game, user, reviews, id, name, released, background_img, rating, platforms}){

    const history = useHistory()
    function handleGameClick(event){
        history.push(`/games/${event.target.name}`)
    }
    return (
        <Container>
        <div className = "game-card">
            <Card>
                <Card.Content>
                    <Card.Header>
                        name: {name}
                    </Card.Header>
                    <Image size = "massive" 
                    floated = "left" 
                    src = {background_img} 
                    onClick = {handleGameClick} 
                    name = {id} 
                    alt = {name}/>
                    <Card.Description>released: {released}</Card.Description>
                    <Card.Description>rating: {rating * 5}/5</Card.Description>
                    <Card.Description>platforms: {platforms}</Card.Description>
                    <Card.Description>
                    <p>reviews:</p>
                        {reviews.map((review) => {
                        if(review.content && review.game.id == id && review.user.id == user.id){
                            return(
                                <div key = {review.id}>
                                    <h4>{review.content}, {review.user_rating} stars</h4>
                                 </div>
                            )
                        }
                    })}
                    </Card.Description>
            {/* <img style ={{width: 300}}name = {id} onClick = {handleGameClick} src = {background_img} alt = {name}></img> */}
          <p>reviews:</p>
              {reviews.map((review) => {
                if(review.content && review.game.id == id && review.user.id == user.id){
                return(
                    <div key = {review.id}>
                        <h4>{review.content}, {review.user_rating} stars</h4>
                    </div>
                )
                }
            })}
            </Card.Content>
            </Card>
        </div>
        </Container>
    )
}

export default AllUserGameCard