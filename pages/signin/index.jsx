import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Cookies } from 'react-cookie'
import { useRouter } from 'next/router'

SignIn.propTypes = {}
const cookies = new Cookies()

function SignIn(props) {
  const router = useRouter()
  const startToken = cookies.get('token') || null
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tokens, setTokens] = useState({ token: startToken })
  const [message, setMessagge] = useState('you are not login')

  async function submitForm() {
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      })
      const data = await response.json()
      const token = data.token
      cookies.set('token', token)

      if (token) {
        setMessagge('welcome')
        setTokens(token)
      }
      router.push('/account')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <form onSubmit>
        <label htmlFor="">email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="button" value="login" onClick={submitForm} />
      </form>
    </div>
  )
}

export default SignIn
