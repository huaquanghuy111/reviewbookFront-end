import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import style from '../../styles/BookList.module.scss'

Book.propTypes = {}

function Book({ data }) {
  return (
    <div>
      <h2 className={style.title}>{data.title}</h2>
      <p className={style.decription}>{data.decription}</p>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const response = await axios.get(
    `http://localhost:5000/books/${context.params.id}`
  )
  const data = response.data
  return {
    props: {
      data,
    },
  }
}

export default Book
