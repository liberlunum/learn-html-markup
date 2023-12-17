import styles from './Footer.module.css'
import MobFooterMenu from "./2-footer-menu/MobFooterMenu";
import MobSocialMedia from "./3-social-media/MobSocialMedia";
import BooksArt from "./1-books-art/BooksArt";

function Footer() {
    return <div >
        <BooksArt/>
        <div className={styles.footerContainer}>
            <MobFooterMenu/>
            <MobSocialMedia />
        </div>

    </div>
}

export default Footer