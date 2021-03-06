import type { NextPage } from 'next'
import styles from '../styles/index.module.css'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';



const New: NextPage = () => {

    const [theme, setTheme] = useState("vs-dark");
    useEffect(() => {
        setTheme(`vs-${localStorage["theme"]}`)
    })

    return (
        <div className={styles.container}>
                  <div className={styles.toolsContainer2}>
                  </div>
          <div className={styles.main}>
          <a className={styles.title} ><h1  style={{fontSize : 35,width: 'auto'}}>{`수정중 : 새문서`}</h1></a>
          <Editor
          width="95%"
     height="80vh"
     defaultLanguage="html"
     theme={theme}
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
                </div>
            </div>
      )
}

export default New
