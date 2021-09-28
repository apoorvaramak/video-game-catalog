import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import NavBar from './components/NavBar.js'
import Main from './components/Main.js'
import Login from './components/Login.js'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/me').then((r) => {
      if (r.ok){
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  if (!user) {
    return <Login onLogin={setUser}/>
  }

  return (
    <>
      <NavBar setUser = {setUser}/>
      <Main user = {user} setUser = {setUser}/>
    </>
  )
}

export default App;
