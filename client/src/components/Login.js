import {useState} from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {Button} from 'semantic-ui-react'

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
            <Button onClick = {handleSignUp}>sign up</Button>
            </>
        ): 
        <>
            <SignUpForm onLogin = {onLogin} setShowLogin = {setShowLogin} showLogin = {showLogin}/>
            <p> Already have an account? </p>
            <Button onClick = {handleSignUp}>Log in</Button>
        </>
        }
    </>
    )
}

export default Login