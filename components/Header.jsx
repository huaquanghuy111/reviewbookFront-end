import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/Header.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Cookies } from 'react-cookie'

Header.propTypes = {}
const cookie = new Cookies()
function Header(props) {
  const token = cookie.get('token')
  return (
    <div className={style.header}>
      <div className={style.menu}>
        <div className="logo">
          <Link href="/">
            <Image src="/avt-cute.jpg" alt="logo" width="80px" height="80px" />
          </Link>
        </div>
        <ul className={style.menu_bookTypes}>
          <li className={style.menu_bookTypes_item}>
            <Link href="/books/pages/1">Sách hay</Link>
          </li>
          <li className={style.menu_bookTypes_item}>
            <Link href="/types/2">Văn học</Link>
          </li>
          <li className={style.menu_bookTypes_item}>
            <Link href="/types/1">Kinh doanh</Link>
          </li>
          <li className={style.menu_bookTypes_item}>
            <Link href="/tac-gia">Tác giả</Link>
          </li>
        </ul>
      </div>
      {!token && (
        <ul className={style.menu_authenticate}>
          <li className={style.menu_authenticate_signIn}>
            <Link href="/signin">Sign In</Link>
          </li>
          <li className={style.menu_authenticate_signUp}>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>
      )}
      {token && (
        <ul className={style.menu_authenticate}>
          <li
            className={style.menu_authenticate_signIn}
            onClick={() => cookie.remove('token')}
          >
            <Link href="/">SignOut</Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
