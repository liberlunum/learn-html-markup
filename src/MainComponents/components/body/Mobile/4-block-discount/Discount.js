import styles from './Discount.module.css'

function Discount() {
    return <div className={styles.discountContainer}>
        <div className={styles.discountHeader}>Сreate an account and get a 15% discount</div>
        <div className={styles.discountInfo}>Create an account with our online bookstore today and start enjoying
            amazing discounts on all your book purchases! By signing up, you will receive a 15% discount on all your
            payments, making it more affordable than ever to get your hands on your favorite books.
        </div>
        <div className={styles.discountButton}>Get now!</div>
    </div>
}

export default Discount