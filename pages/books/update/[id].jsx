import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import style from '../../../styles/BookInput.module.scss'
import axios from 'axios'
import { useRouter } from 'next/router'

Update.propTypes = {
  title: PropTypes.string,
  decription: PropTypes.string,
}

Update.default = {
  title: '',
  decription: '',
}

function Update({ data }) {
  const router = useRouter()
  const { id } = router.query
  const [title, setTitle] = useState(data.title)
  const [decription, setDecription] = useState('')
  const [isSave, setIsSave] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setDecription(e.target.description.value)
    setIsSave(true)
  }

  const handleSubmit = async () => {
    const article = { title: title, decription: decription }
    await axios.put(`http://localhost:5000/books/update/${id}`, article)
    setIsSubmit(true)
  }

  return (
    <div>
      <h2 className={style.subject}>Thay đổi nội dung review</h2>
      <label htmlFor="" className={style.label}>
        Title
      </label>
      <input
        type="text"
        value={title}
        className={style.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="" className={style.label}>
        Description
      </label>
      <form onSubmit={handleFormSubmit}>
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          className={style.input}
        >
          {data.decription}
        </textarea>
        <input type="submit" name="" id="" value="Save" className={style.btn} />
        {isSave && <p>Saved</p>}
      </form>
      <button onClick={handleSubmit} className={style.btn}>
        Submit
      </button>
      {isSubmit && <p>Submited</p>}
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
export default Update
