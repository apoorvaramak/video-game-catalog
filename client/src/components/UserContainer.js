import UserCard from './UserCard'
import styled from 'styled-components'

function UserContainer({ setUserGames, userGames, setReviews, reviews, setUser, user}){
    return(
        <div>
        {/* <ContentBox> */}
            <UserCard  setUserGames = {setUserGames} userGames = {userGames} setReviews = {setReviews} reviews = {reviews} setUser = {setUser} user = {user}/>
        {/* </ContentBox> */}
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

export default UserContainer