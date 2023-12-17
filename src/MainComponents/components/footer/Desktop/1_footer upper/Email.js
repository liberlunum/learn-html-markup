import styles from './Email.module.css'

function Email() {
    return <div>
        <div className={styles.text}>
            <p>
                Subscribe to stay tuned for new product and latest updates. Let’s do it!
            </p>
        </div>
        <div className={styles.inputContainer}>
            <p className={styles.inputText}>Enter your email address</p>
            <p className={styles.inputButton}>Subscribe</p>
        </div>
    </div>
}
export default Email