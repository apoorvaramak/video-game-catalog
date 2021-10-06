import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Form, Button} from 'semantic-ui-react'

function SignUpForm({onLogin, setShowLogin, showLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const[name, setName] = useState("")
  const[age, setAge] = useState("")
  const [errors, setErrors] = useState([]);
  
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();

    if(password !== passwordConfirmation){
      alert('your passwords have to match!')
    }
    else{
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  }

  // function handleAge(e){
  //     let year = e.target.value.slice(6)
  //     let day = e.target.value.slice(3, 5)
  //     let month = e.target.value.slice(0, 2)
  //     let newDate = year + "-" + month + "-" + day
  //     let unixDate = new Date(newDate).getTime()
  //     let newAge = (Date.now() - unixDate)/(1000.0 * 60 * 60 * 24 * 365)
  //     setAge(newAge)
  // }

  return(
      <div className = "login-form">
          <p style = {{color: "red"}}>* required </p>
          <Form onSubmit = {handleSubmit}>
              <div style={{color: "red"}}>*</div> <Form.Input type = "text" placeholder = "username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
              <div style={{color: "red"}}>*</div> <Form.Input type = "password" placeholder = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
              <div style={{color: "red"}}>*</div> <Form.Input type = "password" placeholder = "confirm password" value = {passwordConfirmation} onChange = {(e) => setPasswordConfirmation(e.target.value)}/>
              <div style={{color: "red"}}>*</div> <Form.Input type = "text" placeholder = "name" value = {name} onChange = {(e) => setName(e.target.value)}/>
              <Form.Input type = "text" placeholder = "MM-DD-YYYY" value = {age} onChange = {(e) => setAge(e.target.value)}/>
              <Button type = "submit">Sign Up</Button>
          </Form>
      </div>
  )
}

export default SignUpForm