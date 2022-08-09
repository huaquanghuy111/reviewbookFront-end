import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import Link from 'next/link'
import style from '../../styles/BookList.module.scss'

Author.propTypes = {}

function Author({ data }) {
  return (
    <div>
      <h1 className={style.bigText}>
        Danh sách các tác phẩm của tác giả {data[0].Authors[0].name}
      </h1>
      {data.map((e) => (
        <div className="book" key={e.id}>
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
    `http://localhost:5000/books/authors/${contex.params.id}`
  )
  const data = response.data
  return {
    props: {
      data,
    },
  }
}

export default Author
