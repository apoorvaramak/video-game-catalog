import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import '../index.css'

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
        console.log(event)
        const addedGame = {user_id: user.id, game_id: event.target.name}
        let isInLibrary = true
        console.log(addedGame)
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
                    console.log(data, "reviews data")
                    setReviews([...reviews, data])
                    setUserGames([...userGames, data.game])
                    console.log(userGames)
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


    return(
        <div className = "game-card">
            name: {name}
            released: {released}
            <img style ={{width: 300}}name = {id} onClick = {handleGameClick} src = {background_img} alt = {name}></img>
            rating: {rating * 5}/5
            platforms: {platforms}
            <button name = {id} onClick ={handleAddGame}>Add to List</button>
        </div>
    )
}

export default GameCard