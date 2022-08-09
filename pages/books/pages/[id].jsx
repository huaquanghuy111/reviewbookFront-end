import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import style from '../../../styles/BookList.module.scss'

Page.propTypes = {}

function Page({ data }) {
  const router = useRouter()
  const { id } = router.query
  const [page, setPage] = useState(parseInt(id))

  return (
    <div>
      <h2 className={style.bigText}>Những cuốn sách hay nên đọc</h2>
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

export const getServerSideProps = async (context) => {
  const response = await axios.get(
    `http://localhost:5000/books/page/${context.params.id}`
  )
  const data = response.data
  return {
    props: {
      data,
    },
  }
}

export default Page
