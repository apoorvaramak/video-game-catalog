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
            <div className = "login-form">
            <h4>Don't have an account? </h4>
            <Button onClick = {handleSignUp}>Sign up</Button>
            </div>
            </>
        ): 
        <>
            <SignUpForm onLogin = {onLogin} setShowLogin = {setShowLogin} showLogin = {showLogin}/>
            <div className = "login-form">
                <h4> Already have an account? </h4>
                <Button onClick = {handleSignUp}>Log in</Button>
            </div>
        </>
        }
    </>
    )
}

export default Login