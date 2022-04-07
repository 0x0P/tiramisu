import type { NextPage } from 'next'
import styles from '../../styles/index.module.css'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/router'

const data = `{"Import":"abc"}
<div class=${styles.TiramisuInfo}><object width="30px" type="image/svg+xml" data="/tiramisu.svg"></object> 이문서는 tiramisu 관련 문서입니다 </div>`


const Home: NextPage = () => {

    const [theme, setTheme] = useState("vs-dark");
    useEffect(() => {
        setTheme(`vs-${localStorage["theme"]}`)
    })

    const router = useRouter()
    const { docs } = router.query
    return (
        <div className={styles.container}>
                  <div className={styles.toolsContainer2}>
                  </div>
          <div className={styles.main}>
          <Link href={`/${docs}`}><a className={styles.title} ><h1  style={{fontSize : 35,width: 'auto'}}>{`수정중 : ${docs}`}</h1></a></Link>
          <Editor
          width="95%"
     height="80vh"
     defaultLanguage="html"
     theme={theme}
     defaultValue={data}
   />
    <h2>
    
    </h2>      
            </div>
            <div className={styles.toolsContainer}>
            <div className={styles.tools}>
            <Link href={`/new`}><a><span className="material-icons-outlined">insert_drive_file</span></a></Link>
              <hr />
              <Link href={`/best`}><a><span className="material-icons-outlined">trending_up</span></a></Link>
              <hr />
              <Link href={`/recent`}><a><span className="material-icons-outlined">autorenew</span></a></Link>
                </div>
                <div className={styles.tools}>
                <span className="material-icons-outlined">favorite_border</span>
                <hr />
                <Link href={`/edit/${docs}`}><a><span className="material-icons-outlined">edit</span></a></Link>
              <hr />
              <Link href={`/discuss/${docs}`}><a><span className="material-icons-outlined">question_answer</span></a></Link>
              <hr />
              <Link href={`/history/${docs}`}><a><span className="material-icons-outlined">history</span></a></Link>
    
                </div>
                </div>
            </div>
      )
}

export default Home
