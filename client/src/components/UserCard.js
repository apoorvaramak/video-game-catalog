import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import UserGameCard from './UserGameCard'
import UserEditForm from './UserEditForm'
import { Card, Button, Image, Container } from 'semantic-ui-react';
import styled from 'styled-components'
import '../index.css'

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

      <div>
        <div className = "user-card">
          {user.pfp ? <div><Image style = {{width:250}}className = "profile-pic" src = {user.pfp} alt ={user.name} avatar size = "small" circular></Image>
          <span className = "username">Hi, {user.username}!</span>
          </div> : 
          <div><Image style = {{width:250}} className = "profile-pic" src = "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" alt = "default" avatar size = "large"></Image>
          <span className = "username">Hi, {user.username}!</span>
          </div>}
          <h3>{user.bio}</h3>
          {console.log(checked, "checked")}
          {checked ? "" : <h3>{user.age.slice(0, 5)} 🎂</h3>}
          {showEditForm ? <UserEditForm checked = {checked} setChecked = {setChecked} setShowBirthday = {setShowBirthday} showBirthday = {showBirthday} setShowEditForm = {setShowEditForm} setUser = {setUser} user = {user}/> : <Button onClick = {handleEditPfp}>Edit Profile</Button>}
        </div>
          <NewContentBox>
            {gameslist}
          </NewContentBox>
      </div>
  )
}

const NewContentBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export default UserCard