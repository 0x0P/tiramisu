import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'
import Logo from "../assets/tiramisu.svg";
import Link from 'next/link';
const Splash: NextPage = () => {

  return (
    <div className={styles.container} >
    <Link href="/index"><a><Logo className={styles.logo} width={20} /></a></Link>
    <div className={styles.right}>
    <input>
    </input>
    <span className="material-icons-outlined">search</span>
        </div>
      </div>
      )
}

export default Splash
