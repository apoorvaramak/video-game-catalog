import AllUserCard from './AllUserCard'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import { Card } from 'semantic-ui-react'

function AllUserContainer({ setReviews, reviews, setUser, users}){
    const params = useParams()
    const user = users.filter((user) => user.id == params.id)

    return(
        <ContentBox>
        <div>
            <AllUserCard  setReviews = {setReviews} reviews = {reviews} setUser = {setUser} user = {user}/>
        </div>
        </ContentBox>
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

export default AllUserContainer