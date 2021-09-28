import {NavLink} from 'react-router-dom'

function NavBar({setUser}){

    function handleLogOut(){
        fetch('/logout', {
            method: "DELETE"
        }).then((r) => {
            if(r.ok){
                setUser(null)
            }
        })
    }
    return(
        <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/feed">Games</NavLink>
                <NavLink to="/search">Search</NavLink>
                <button onClick = {handleLogOut}>Log Out</button>
        </nav>
    )
}

export default NavBar;