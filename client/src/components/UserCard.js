import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import UserGameCard from './UserGameCard'
import UserEditForm from './UserEditForm'
import { Card, Button, Image } from 'semantic-ui-react';

function UserCard({userGames, setUserGames, setReviews, reviews, user, setUser}){
  const history = useHistory();
  const [showEditForm, setShowEditForm] = useState(false)
  const [showBirthday, setShowBirthday] = useState(true)
  if(user.showBirthday == null){
    console.log(user.showBirthday)
    user.showBirthday = true
  }

  console.log(user)
  const [checked, setChecked] = useState(!user.showBirthday)

  function handleAddReview(event){
    history.push(`/reviews/${event.target.name}/edit`)
  }

  function handleEditPfp(event){
    setShowEditForm(true)
  }

    
    const gameslist = userGames.map(game => {
      return (
        <div key = {game.id}>
          <UserGameCard game = {game} userGames = {userGames} setUserGames = {setUserGames} name = {game.name} id = {game.id} rating = {game.rating} platforms = {game.platforms} released = {game.released} background_img = {game.background_img} key = {game.id} user = {user} setUser = {setUser} setReviews = {setReviews} reviews = {reviews} game = {game} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms} handleAddReview = {handleAddReview}/>
        </div> 
      )
    })

  return(
    <Card.Group>
      <div>
          {user.pfp ? <div><Image className = "profile-pic" src = {user.pfp} alt ={user.name} avatar circular size = "medium"></Image>
          <span className = "username">Hi, {user.username}!</span>
          </div> : 
          <div><Image className = "profile-pic" src = "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" alt = "default" avatar size = "large"></Image>
          <span className = "username">Hi, {user.username}!</span>
          </div>}
          <h5>{user.bio}</h5>
          {console.log(checked, "checked")}
          {checked ? "" : <h5>{user.age.slice(0, 5)}</h5>}
          {showEditForm ? <UserEditForm checked = {checked} setChecked = {setChecked} setShowBirthday = {setShowBirthday} showBirthday = {showBirthday} setShowEditForm = {setShowEditForm} setUser = {setUser} user = {user}/> : <Button onClick = {handleEditPfp}>Edit Profile</Button>}
          {gameslist}
      </div>
    </Card.Group>
  )
}

export default UserCard