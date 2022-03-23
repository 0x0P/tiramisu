import type { NextPage } from 'next'
import { useEffect } from 'react'
import styles from '../../styles/index.module.css'
import ReactHtmlParser from 'react-html-parser';
import { parser } from '../../assets/parser';
import Link from 'next/link';
import { useRouter } from 'next/router'

const data = `{"Import":"abc"} asdfasfdsfsdfsa {"Import":"abc"} {"Import":"abc"}a asfsafasfa`


const Home: NextPage = () => {
  const router = useRouter()
  const { docs } = router.query
  useEffect(() => {
    })
  return (
    <div className={styles.container}>
              <div className={styles.toolsContainer2}>
              </div>
      <div className={styles.main}>
      <Link href={`/${docs}`}><a className={styles.title} ><h1  style={{fontSize : 35}}>{docs}</h1></a></Link>
      {ReactHtmlParser(parser(data))}
<h2>

</h2>      
        </div>
        <div className={styles.toolsContainer}>
        <div className={styles.tools}>
          <span className="material-icons-outlined">insert_drive_file</span>
          <hr />
          <span className="material-icons-outlined">trending_up</span>
          <hr />
          <span className="material-icons-outlined">autorenew</span>
            </div>
            <div className={styles.tools}>
            <span className="material-icons-outlined">favorite_border</span>
            <hr />
          <span className="material-icons-outlined">edit</span>
          <hr />
          <span className="material-icons-outlined">question_answer</span>
          <hr />
          <span className="material-icons-outlined">history</span>

            </div>
            </div>
        </div>
  )
}

export default Home
