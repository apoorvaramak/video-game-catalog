import UserContainer from './UserContainer'
import GamesContainer from './GamesContainer'
import ReviewForm from './ReviewForm'
import SingleGameCard from './SingleGameCard'
import {useParams,  Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'
import AllUserContainer from './AllUserContainer'

function Main(){

    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('/games')
        .then(response => response.json())
        .then(data => setGames(data))
    }, [])

    const [user, setUser] = useState([])

    useEffect(() => {
    fetch('/me')
      .then(response => response.json())
      .then(data => setUser(data))
    }, [])

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews')
        .then(response => response.json())
        .then(data => setReviews(data))
    }, [])

    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        fetch('/users')
        .then(response => response.json())
        .then(data => setAllUsers(data))
    }, [])

    const [userGames, setUserGames] = useState([])

    useEffect(() => {
        fetch('/me')
        .then(response => response.json())
        .then(data => setUserGames(data.games))
    }, [])

    const[searchValue, setSearchValue] = useState("")
    const [searchedGames, setSearchedGames] = useState([])

    




    return(
        <Switch>
            <Route exact path = "/">
                <UserContainer setUserGames = {setUserGames} userGames = {userGames} setReviews = {setReviews} reviews = {reviews} setUser = {setUser} user = {user}/>
            </Route>
            <Route exact path ="/feed">
                <GamesContainer setUserGames = {setUserGames} userGames = {userGames} setReviews = {setReviews} reviews = {reviews} user = {user} setUser = {setUser} games = {games} setGames = {setGames}/>
            </Route>
            <Route exact path = "/games/:id">
                <SingleGameCard setReviews = {setReviews} reviews = {reviews} user = {user} games = {games}/>
            </Route>
            <Route exact path = "/reviews/:id/edit">
                <ReviewForm reviews = {reviews} setReviews = {setReviews} user = {user} />
            </Route>
            <Route exact path = "/search">
                <SearchBar games ={games} searchValue = {searchValue} setSearchValue = {setSearchValue} searchedGames = {searchedGames} setSearchedGames = {setSearchedGames}/>
                <SearchResults searchedGames = {searchedGames} setUser = {setUser} user = {user} setReviews = {setReviews} reviews = {reviews} setGames = {setGames}/>
            </Route>
            <Route exact path = "/user/:id">
                <AllUserContainer setReviews = {setReviews} reviews = {reviews} setUser = {setUser} users = {allUsers}/>
            </Route>
        </Switch>
    )
}

export default Main;