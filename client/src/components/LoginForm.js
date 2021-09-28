import React, {useState} from 'react'

function LoginForm({onLogin}){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState([]);

    function handleFormSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        }).then((r) => {
            if(r.ok){
                r.json().then((user) => onLogin(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return(
        <div>
            <form onSubmit = {handleFormSubmit}>
                <input type = "text" placeholder = "username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
                <input type = "text" placeholder = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
                <button type = "submit"> Log In</button>

            </form>
        </div>
    )

}

export default LoginForm