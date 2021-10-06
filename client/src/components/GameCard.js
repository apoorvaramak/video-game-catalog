import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import '../index.css'
import {Card, Image, Button} from 'semantic-ui-react'

function GameCard({user, setUserGames, userGames, setReviews, reviews, game, id, name, released, background_img, rating, platforms}){
    // const[user, setUser] = useState([])
    // useEffect(() => {
    //     fetch('/me')
    //       .then(response => response.json())
    //       .then(data => setUser(data))
    //   }, [])

      let history = useHistory()

    function handleAddGame(event){
        event.preventDefault()
        const addedGame = {user_id: user.id, game_id: event.target.name}
        let isInLibrary = true
        reviews.forEach((review) => {
            if(review.game.id == addedGame.game_id && review.user.id == addedGame.user_id){
                isInLibrary = false
                alert("already in your library!")
            }
        })

        if(isInLibrary){
            event.preventDefault()
                fetch('/reviews', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify(addedGame)
                }).then(response => response.json())
                .then(data => {
                    setReviews([...reviews, data])
                    setUserGames([...userGames, data.game])
                    history.push('/')
                })
        }
    }

    function handleGameClick(event){
        history.push(`/games/${event.target.name}`)
    }

    // let button = false

    // if(user.games){
    //     if(user.games.includes(game)){
    //         button = true
    //     }
    // }

    let stars = ''
    let theRating = rating * 5;
    console.log(theRating, "theRating")
    while (theRating > 1){
        stars += '⭐'
        theRating-=1
    }


    return(
        <Card>
            <Card.Content>
            <div className = "game-card">
                <Card.Header>
                    <h3><b>{name}</b></h3>
                </Card.Header>

                <Image size = "massive" 
                    floated = "left" 
                    src = {background_img} 
                    onClick = {handleGameClick} 
                    name = {id} 
                    alt = {name}/>
                {/* <img style ={{width: 300}}name = {id} onClick = {handleGameClick} src = {background_img} alt = {name}></img> */}
                <Card.Description><b>released: </b>{released}</Card.Description>
                <Card.Description><b>rating:</b> {stars}</Card.Description>
                <Card.Description><b>platforms:</b> {platforms}</Card.Description>
                <Button name = {id} onClick ={handleAddGame}>Add to List</Button>
            </div>
            </Card.Content>
        </Card>
    )
}

export default GameCard