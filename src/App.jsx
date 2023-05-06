import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>

      <h1>Vite + React</h1>
      <h4>{user.length}</h4>

    </>
  )
}

export default App
