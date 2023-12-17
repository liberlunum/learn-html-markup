import styles from './MenuUpper.module.css'
import logo from '../img/Logo.png'

function MenuUpper() {
    return <div>
        <div>
            <img src={logo} alt="logo"/>
        </div>
        <div className={styles.textMenu}>
            <p className={styles.text}>About</p>
            <p className={styles.text}>Features</p>
            <p className={styles.text}>Pricing</p>
            <p className={styles.text}>Gallery</p>
            <p >Team</p>
        </div>
    </div>
}

export default MenuUpper