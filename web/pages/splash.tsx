import type { NextPage } from 'next'
import styles from '../styles/splash.module.css'
import Logo from "../assets/tiramisu.svg";
import { useEffect, useState } from 'react';


const Splash: NextPage = () => {
  const [display, setDisplay] = useState("flex");
  useEffect(() => {
    window.addEventListener("load", function(e) {
      console.log(e.isTrusted)
      setDisplay("none")
    });
  })
  return (
    <div style={{ display : display }} className={styles.container} >
    <Logo className={styles.logo} width="11vw" height="11vh" />
    <h1>이 화면이 지속된다면 새로고침 하거나 status.tiramisu.wiki를 확인해주세요</h1>
      </div>
      )
}

export default Splash
