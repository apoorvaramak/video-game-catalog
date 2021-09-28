import AllUserGameCard from './AllUserGameCard'

function AllUserCard({reviews, setReviews, user, setUser}){
    let gameslist = ""

    console.log(user[0])
    if(user[0]){
        user = user[0]
    }
    if (user.games){

        console.log(user.games)
      
      gameslist = user.games.map(game => {
        return (
          <div key = {game.id}>
            <AllUserGameCard user = {user} reviews = {reviews} game = {game} id = {game.id} name = {game.name} released = {game.released} background_img = {game.background_img} rating = {game.rating} platforms = {game.platforms} />
          </div> 
        )
      })
    }
  
    return(
        <div>
            <img src = {user.pfp} alt ={user.name}></img>
            <h3>{user.name}</h3>
            <h5>{user.bio}</h5>
            {gameslist}
        </div>
    )
}

export default AllUserCard