import AllUserCard from './AllUserCard'
import {useParams} from 'react-router-dom'

function AllUserContainer({ setReviews, reviews, setUser, users}){
    const params = useParams()
    const user = users.filter((user) => user.id == params.id)
    console.log(user)

    return(
        <div>
            <AllUserCard  setReviews = {setReviews} reviews = {reviews} setUser = {setUser} user = {user}/>
        </div>
    )
}

export default AllUserContainer