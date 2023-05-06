import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { json } from 'react-router-dom'

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

  const handleSubmit = event => {
    event.preventDefault()
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;

    const user = { name, email }

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => console.log(data))

    console.log(user)
    from.reset()

  }



  return (
    <>

      <h1>Vite + React</h1>
      <h4>{user.length}</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' />
        <br />
        <input type="email" name="email" id="" placeholder='Email' />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </>
  )
}

export default App
