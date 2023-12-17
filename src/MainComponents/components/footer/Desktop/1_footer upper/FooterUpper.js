import styles from './FooterUpper.module.css'
import MenuUpper from "./MenuUpper";
import Email from "./Email";

function FooterUpper() {
    return <div className={styles.footerContainer}>
        <MenuUpper/>
        <Email/>
    </div>
}

export default FooterUpper