import {NavLink} from 'react-router-dom'
import {Menu, Button} from 'semantic-ui-react'

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
            <Menu>
                <Menu.Item>
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/feed">Games</NavLink>
                </Menu.Item>
                <Menu.Item>
                    <NavLink to="/search">Search</NavLink>
                </Menu.Item>
                <Menu.Item position = "right">
                    <Button onClick = {handleLogOut}>Log Out</Button>
                </Menu.Item>
            </Menu>
        </nav>
    )
}

export default NavBar;