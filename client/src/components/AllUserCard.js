import AllUserGameCard from './AllUserGameCard'
import styled from 'styled-components'
import {Image} from 'semantic-ui-react'

function AllUserCard({reviews, setReviews, user, setUser}){
    let gameslist = ""
    if(user[0]){
        user = user[0]
    }
    if (user.games){
      
      gameslist = user.games.map(game => {
        return (
          <div key = {game.id}>
            <AllUserGameCard user = {user} reviews = {reviews} game = {game} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms} />
          </div> 
        )
      })
    }

    console.log(user, "user")
  
    return(
        <div>
          
          <div className = "user-card">
          {user.pfp ? <div><Image style ={{width: 250}} className = "profile-pic" src = {user.pfp} alt ={user.name} avatar size = "small" circular></Image>
          <span className = "username">{user.username}</span>
          </div> : 
          <div><Image style = {{width: 250}}className = "profile-pic" src = "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg" alt = "default" avatar size = "large"></Image>
          <span className = "username">{user.username}</span>
          </div>}
          {/* <Image className = "profile-pic" src = {user.pfp} alt ={user.name} avatar size = "small" circular></Image> */}
          <h3>{user.bio}</h3>
          <h3>{user.age.slice(0, 5)} 🎂</h3>
        </div>
            <ContentBox>
            {gameslist}
            </ContentBox>
        </div>
    )
}

const ContentBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  flex-wrap: wrap;
  flex-direction: row; 
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export default AllUserCard