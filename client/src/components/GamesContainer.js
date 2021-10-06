import GamesList from './GamesList'
import styled from 'styled-components'

function GamesContainer({setUserGames, userGames, reviews, setReviews, user, setUser, games, setGames}){
    return(
        <ContentBox>
            <GamesList setUserGames = {setUserGames} userGames = {userGames} setReviews = {setReviews} reviews = {reviews} user = {user} setUser = {setUser} games = {games} setGames = {setGames}/>
        </ContentBox>
    )
}

const ContentBox = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.25rem;
  flex-wrap: wrap;
  align-items: center;
  grid-area: content;
  justify-content: center;
`;

export default GamesContainer