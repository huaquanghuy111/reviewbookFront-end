import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import style from '../styles/Authors.module.scss'

AuthorList.propTypes = {
  list: PropTypes.array,
}
AuthorList.default = {
  list: [],
}

function AuthorList(props) {
  const { list } = props
  return (
    <div>
      <ul className={style.list}>
        {list.map((e) => (
          <li key={e.id}>
            <Link href={`/tac-gia/${e.id}`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AuthorList
