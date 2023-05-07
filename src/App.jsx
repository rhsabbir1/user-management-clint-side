import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { json } from 'react-router-dom'

function App() {

  const [users, setusers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/user')
      .then(res => res.json())
      .then(data => setusers(data))
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
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const newUser = [...users, data]
        setusers(newUser)
        from.reset()
      })

  }



  return (
    <>

      <h1>User management</h1>
      <h4>{users.length}</h4>

      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' />
        <br />
        <input type="email" name="email" id="" placeholder='Email' />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {
        users.map(user => <p
          key={user.id}>{user.name
          }</p>)
      }
    </>
  )
}

export default App
