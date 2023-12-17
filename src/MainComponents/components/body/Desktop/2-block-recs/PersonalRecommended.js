import styles from './PersonalRecommended.module.css'
import book1 from '../../img/book_1.jpg'
import book2 from '../../img/book_2.jpg'
import book3 from '../../img/book_3.jpg'
import {ReactComponent as IconBasket} from '../../img/basket.svg'
import {ReactComponent as BigArrow} from '../../img/arrow2.svg'

function PersonalRecommended() {
    return <div className={styles.recsBlock}>
        <div className={styles.titleRecs}>
            <p>Recommended for you </p>
        </div>
        <div className={styles.recsContainer}>
            <div className={styles.products}>
                <div className={styles.imgProduct}>
                    <img src={book1} alt="book1"/>
                </div>
                <div className={styles.infoProduct}>
                    <p className={styles.productText}>Pride and Protest</p>
                    <p className={styles.productSummary}>A woman goes head-to-head with the CEO of...</p>
                    <div className={styles.allPrice}>
                        <p className={styles.normalPrice}>$ 15.50</p>
                        <p className={styles.discount}>$ 18.50</p>
                    </div>
                    <div className={styles.basket}>
                        <IconBasket />
                        <p >Add to basket</p>
                    </div>
                </div>
            </div>
            <div className={styles.products}>
                <div className={styles.imgProduct}>
                    <img src={book2} alt="book2"/>
                </div>
                <div className={styles.infoProduct}>
                    <p className={styles.productText}>Forget a Mentor, Find...</p>
                    <p className={styles.productSummary}>In this powerful yet practical book, economist and...</p>
                    <div className={styles.allPrice}>
                        <p className={styles.normalPrice}>$ 29.99</p>
                        <p className={styles.discount}>$ 32.99</p>
                    </div>
                    <div className={styles.basket}>
                        <IconBasket />
                        <p >Add to basket</p>
                    </div>
                </div>
            </div>
            <div className={styles.product3}>
                <img src={book3} alt="book3"/>
            </div>
            <BigArrow className={styles.iconArrow} />
        </div>
    </div>
}
export default PersonalRecommended