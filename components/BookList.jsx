import React from 'react'
import PropTypes from 'prop-types'
import style from '../styles/UpdateBook.module.scss'
import Link from 'next/link'

BookList.propTypes = {
  data: PropTypes.array,
  onDeleteClick: PropTypes.func,
}

BookList.defautl = {
  data: [],
  onDeleteClick: null,
}

function BookList(props) {
  const { data, onDeleteClick } = props
  const handleClickDelete = (book) => {
    if (onDeleteClick) onDeleteClick(book)
    return
  }

  return (
    <div>
      {data.map((e) => (
        <div key={e.id} className={style.titleButton}>
          <p className={style.title}>{e.title}</p>
          <button className={style.btn} onClick={() => handleClickDelete(e)}>
            Delete
          </button>
          <button className={style.btn}>
            <Link href={`/books/update/${e.id}`}>Update</Link>
          </button>
        </div>
      ))}
    </div>
  )
}

export default BookList
