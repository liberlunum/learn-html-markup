import styles from './MenuLower.module.css'

function MenuLower() {
    return <div className={styles.menuTextContainer}>
        <p className={styles.menuText}>Privacy Policy</p>
        <p className={styles.menuText}>Terms of Use</p>
        <p className={styles.menuText}>Sales and Refunds</p>
        <p>Legal</p>
    </div>
}
export default MenuLower