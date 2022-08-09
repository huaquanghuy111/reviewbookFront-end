import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookList from '../../../components/BookList'
import { Cookies } from 'react-cookie'

function Delete() {
  const cookie = new Cookies()

  const [books, setBooks] = useState([])
  const token = cookie.get('token')
  useEffect(() => {
    async function fetchBooks() {
      try {
        const response = await axios.get('http://localhost:5000/books', {
          headers: {
            authorization: token,
          },
        })
        setBooks(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchBooks()
  }, [])

  const handleClickDelete = async (book) => {
    try {
      await fetch(`http://localhost:5000/delete/${book.id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
      const id = book.id
      const newBooks = books.filter((book) => book.id !== id)
      setBooks(newBooks)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <BookList data={books} onDeleteClick={handleClickDelete} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const response = await axios.get('http://localhost:5000/books')
//   const data = response.data
//   return {
//     props: {
//       data,
//     },
//   }
// }
export default Delete
