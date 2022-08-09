import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.scss'
import Link from 'next/link'
import { useState } from 'react'

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Book Review - Review sách số 1 Việt Nam </title>
      </Head>
      <div className={style.wrap}>
        <div className={style.catelogy}>
          <h1>Thể loại sách</h1>
          <ul>
            {data.map((e) => (
              <li key={e.id}>
                <Link href={`/types/${e.id}`}>{e.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.main_content}>
          <h1>WELCOME TO BOOK REVIEW </h1>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await axios.get('http://localhost:5000/kinds')
  const data = response.data
  return {
    props: {
      data,
    },
  }
}
