import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import style from '../../../styles/BookInput.module.scss'

Post.propTypes = {}
const cookie = new Cookies()
function Post(props) {
  const [title, setTitle] = useState('')
  const [decription, setDecription] = useState('')
  const [isSave, setIsSave] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const token = cookie.get('token')
  console.log(token)
  const handleSubmit = async () => {
    try {
      console.log(title, decription)
      await fetch('http://localhost:5000/books', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, decription: decription }),
      })
    } catch (err) {
      console.log(err)
    }
    setIsSubmit(true)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setDecription(e.target.description.value)
    setIsSave(true)
  }

  return (
    <div>
      <h2 className={style.subject}>Thêm review cho sách</h2>
      <label htmlFor="" className={style.label}>
        Title
      </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={style.input}
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
        ></textarea>
        <input type="submit" name="" id="" value="Save" className={style.btn} />
      </form>
      {isSave && <p className={style.isSave}>Saved</p>}

      <button onClick={handleSubmit} className={style.btn}>
        Submit
      </button>
      {isSubmit && <p className={style.isSave}>Submited</p>}
    </div>
  )
}

export default Post
