import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import style from '../styles/Footer.module.scss'

Footer.propTypes = {}

function Footer(props) {
  return (
    <div className={style.container}>
      <div className={style.col}>
        <Image src="/avt-cute.jpg" alt="logo" width="80px" height="80px" />
      </div>
      <div className={style.col}>
        <ul className={style.contact_list}>
          <li className={style.email}>Email</li>
          <li className={style.hotline}>Hotline</li>
          <li className={style.address}>Address</li>
        </ul>
      </div>
      <div className={style.col}>
        <div className={style.facebook}>Facebook</div>
        <div className={style.istargram}>Istargram</div>
        <div className={style.tweeter}>Tweeter</div>
      </div>
    </div>
  )
}

export default Footer
