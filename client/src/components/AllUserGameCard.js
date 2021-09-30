import {useHistory} from 'react-router-dom'

function AllUserGameCard({game, user, reviews, id, name, released, background_img, rating, platforms}){

    const history = useHistory()
    function handleGameClick(event){
        history.push(`/games/${event.target.name}`)
    }
    return (
        <div className = "game-card">
            name: {name}
            released: {released}
            <img style ={{width: 300}}name = {id} onClick = {handleGameClick} src = {background_img} alt = {name}></img>
            rating: {rating * 5}/5
            platforms: {platforms}
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
        </div>
    )
}

export default AllUserGameCard