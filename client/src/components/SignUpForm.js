import {useState} from 'react'

function SignUpForm({onLogin}){
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const[name, setName] = useState("")
  const[age, setAge] = useState("")
  const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
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

  function handleAge(e){
      let year = e.target.value.slice(6)
      let day = e.target.value.slice(3, 5)
      let month = e.target.value.slice(0, 2)
      let newDate = year + "-" + month + "-" + day
      let unixDate = new Date(newDate).getTime()
      let newAge = (Date.now() - unixDate)/(1000.0 * 60 * 60 * 24 * 365)
      setAge(newAge)
  }

  return(
      <div>
          <form onSubmit = {handleSubmit}>
              <input type = "text" placeholder = "username" value = {username} onChange = {(e) => setUsername(e.target.value)}/>
              <input type = "text" placeholder = "password" value = {password} onChange = {(e) => setPassword(e.target.value)}/>
              <input type = "text" placeholder = "confirm password" value = {passwordConfirmation} onChange = {(e) => setPasswordConfirmation(e.target.value)}/>
              <input type = "text" placeholder = "name" value = {name} onChange = {(e) => setName(e.target.value)}/>
              <input type = "text" placeholder = "MM-DD-YYYY" value = {age} onChange = {(e) => setAge(e.target.value)}/>
              <button type = "submit">Sign Up</button>
          </form>
      </div>
  )
}

export default SignUpForm