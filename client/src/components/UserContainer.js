import UserCard from './UserCard'

function UserContainer({ setUserGames, userGames, setReviews, reviews, setUser, user}){
    return(
        <div>
            <UserCard  setUserGames = {setUserGames} userGames = {userGames} setReviews = {setReviews} reviews = {reviews} setUser = {setUser} user = {user}/>
        </div>
    )
}

export default UserContainer