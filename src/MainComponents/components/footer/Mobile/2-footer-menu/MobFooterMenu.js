import styles from './MobFooterMenu.module.css'

function MobFooterMenu() {
    return <div className={styles.footerMenuContainer}>
        <div className={styles.footerText}>Contact</div>
        <div className={styles.footerText}>Terms of Use</div>
        <div className={styles.footerText}>Privacy Policy</div>
        <div className={styles.footerText}>FAQ</div>
    </div>
}

export default MobFooterMenu