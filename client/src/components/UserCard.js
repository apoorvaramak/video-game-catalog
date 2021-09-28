import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import UserGameCard from './UserGameCard'

function UserCard({userGames, setUserGames, setReviews, reviews, user, setUser}){
  const history = useHistory();

  function handleAddReview(event){
    history.push(`/reviews/${event.target.name}/edit`)
  }

  // const [userGames, setUserGames] = useState([])

  // useEffect(() => {
  //   fetch('/me')
  //   .then(response => response.json())
  //   .then(data => setUserGames(data.games))
  // }, [])
  console.log(userGames, "userGames")
    
    const gameslist = userGames.map(game => {
      return (
        <div key = {game.id}>
          <UserGameCard game = {game} userGames = {userGames} setUserGames = {setUserGames} name = {game.name} id = {game.id} rating = {game.rating} platforms = {game.platforms} released = {game.released} background_img = {game.background_img} key = {game.id} user = {user} setUser = {setUser} setReviews = {setReviews} reviews = {reviews} game = {game} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms} handleAddReview = {handleAddReview}/>
        </div> 
      )
    })

  return(
      <div>
          <img src = {user.pfp} alt ={user.name}></img>
          <h3>{user.name}</h3>
          <h5>{user.bio}</h5>
          {gameslist}
      </div>
  )
}

export default UserCard