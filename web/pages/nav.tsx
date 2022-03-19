import type { NextPage } from 'next'
import styles from '../styles/nav.module.css'
import Logo from "../assets/tiramisu.svg";

const Splash: NextPage = () => {

  return (
    <div className={styles.container} >
    <Logo className={styles.logo} width={20} />
    <div className={styles.right}>
    <input>
    </input>
    <span className="material-icons-outlined">search</span>
        </div>
      </div>
      )
}

export default Splash
