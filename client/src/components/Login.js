import {useState} from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true)

    function handleSignUp(){
        setShowLogin(showLogin => !showLogin)
    }
    return(
        <>
        {showLogin ? (
            <>
            <LoginForm onLogin = {onLogin} />
            <p>Don't have an account? </p>
            <button onClick = {handleSignUp}>sign up</button>
            </>
        ): 
        <>
            <SignUpForm onLogin = {onLogin}/>
            <p> Already have an account? </p>
            <button onClick = {handleSignUp}>Log in</button>
        </>
        }
    </>
    )
}

export default Login