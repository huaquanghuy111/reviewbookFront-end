import React, { useState } from 'react'
import PropTypes from 'prop-types'

SignUp.propTypes = {}

function SignUp(props) {
  const [user, setUser] = useState({})
  const [isSave, setIsSave] = useState(false)

  const handleSubmitForm = (e) => {
    e.preventDefault()
    const newUser = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    }
    setUser(newUser)
    setIsSave(true)
  }
  const createUser = async () => {
    try {
      const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const data = await response.json()
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="">email</label>
        <input type="text" placeholder="email" name="email" />
        <label htmlFor="">user name</label>
        <input type="text" placeholder="username" name="username" />
        <label htmlFor="">password</label>
        <input type="password" placeholder="password" name="password" />
        <input type="submit" value="save" />
        {isSave && <p>saved</p>}
      </form>
      <button onClick={createUser}>Submit</button>
    </div>
  )
}

export default SignUp
