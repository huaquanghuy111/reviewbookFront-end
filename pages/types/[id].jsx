import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Link from 'next/link'
import style from '../../styles/BookList.module.scss'

Types.propTypes = {}

function Types({ data }) {
  return (
    <div>
      <h1 className={style.bigText}>
        Những sách thuộc thể loại {data[0].Kind.typeBook}
      </h1>
      {data.map((e) => (
        <div key={e.id}>
          <Link href={`/books/${e.id}`}>
            <h2 className={`${style.title} ${style.pointer}`}>{e.title}</h2>
          </Link>
          <p className={style.decription}>{e.decription}</p>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = async (contex) => {
  const response = await axios.get(
    `http://localhost:5000/books/kinds/${contex.params.id}`
  )
  const data = response.data
  return {
    props: {
      data,
    },
  }
}

export default Types
