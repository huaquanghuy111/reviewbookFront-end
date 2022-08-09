import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import AuthorList from '../../components/AuthorList'
import style from '../../styles/BookList.module.scss'

Author.propTypes = {}

function Author({ data }) {
  return (
    <div>
      <h1 className={style.bigText}>Danh sách các tác giả nổi bật</h1>
      <AuthorList list={data} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await axios.get('http://localhost:5000/authors')
  const data = response.data
  return {
    props: {
      data,
    },
  }
}
export default Author
