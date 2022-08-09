import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import Footer from './Footer'

Layout.propTypes = {}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
