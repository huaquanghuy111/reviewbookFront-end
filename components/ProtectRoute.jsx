import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import { Cookies } from 'react-cookie'

ProtectRoute.propTypes = {}
const cookie = new Cookies()

function ProtectRoute({ children }) {
  const unProtectedRoute = ['/signin', '/signup', '/']
  const router = useRouter()
  const pathIsProtected = unProtectedRoute.indexOf(router.pathname) === -1
  const token = cookie.get('token')
  if (!token && pathIsProtected) {
    return (
      <div>
        <h1>You are not login, please login!</h1>
      </div>
    )
  } else return <div>{children}</div>
}

export default ProtectRoute
