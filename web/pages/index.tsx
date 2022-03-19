import type { NextPage } from 'next'
import styles from '../styles/index.module.css'
import Router from 'next/router'
import { useEffect } from 'react'


const Home: NextPage = () => {
useEffect(() => {
  Router.push('/index')
})  
  return (
    <div className={styles.container}>
              <div className={styles.toolsContainer}></div>
      <div className={styles.main}>
      <h1 className={styles.title} style={{fontSize : 35}}>REDIRECT</h1>
            </div>
        </div>
  )
}

export default Home
