import styles from './FooterLower.module.css'
import MenuLower from "./MenuLower";
import SocialMedia from "./Socialmedia";

function FooterLower() {
    return <div >
        <div className={styles.line}>
            <p></p>
        </div>
        <div className={styles.footerMenuContainer}>
            <MenuLower/>
            <SocialMedia/>
        </div>

    </div>
}
export default FooterLower