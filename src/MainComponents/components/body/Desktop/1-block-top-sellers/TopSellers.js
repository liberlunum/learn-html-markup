import styles from './TopSellers.module.css'
import {ReactComponent as Arrow} from '../../img/Arrow.svg'
import product1 from '../../img/Product photo.jpg'
import product2 from '../../img/Product2.jpg'
import product3 from '../../img/Product3.jpg'
import {ReactComponent as IconBasket} from '../../img/basket.svg'
import {ReactComponent as BigArrow} from '../../img/arrow2.svg'

function TopSellers() {
    return <div className={styles.topSellersContainer}>
        <div className={styles.header}>
            <p>Top Sellers</p>
        </div>
        <div className={styles.dropdown}>
            <p>Choose a genre</p>
            <Arrow/>
        </div>
        <div className={styles.sliderContainer}>
            <div className={styles.product}>
                <div className={styles.imgProduct}>
                    <img src={product1} alt="book 1"/>
                </div>
                <div className={styles.infoProduct}>
                    <p className={styles.productText}>The Time Has Come</p>
                    <p className={styles.productSummary}>Lindbergh's Pharmacy is an Athens, Georgia, institution...</p>
                    <div className={styles.allPrice}>
                        <p className={styles.normalPrice}>$ 27.89</p>
                        <p className={styles.discount}>$ 30.99</p>
                    </div>
                    <div className={styles.basket}>
                        <IconBasket/>
                        <p>Add to basket</p>
                    </div>
                </div>
            </div>
            <div className={styles.product}>
                <div className={styles.imgProduct}>
                    <img src={product2} alt="book 2"/>
                </div>
                <div className={styles.infoProduct}>
                    <p className={styles.productText}>I Want a Better Catastrophe...</p>
                    <p className={styles.productSummary}>With global warming projected to rocket past the...</p>
                    <div className={styles.allPrice}>
                        <p className={styles.normalPrice}>$ 26.99</p>
                        <p className={styles.discount}>$ 29.99</p>
                    </div>
                    <div className={styles.basket}>
                        <IconBasket/>
                        <p>Add to basket</p>
                    </div>
                </div>
            </div>
            <div className={styles.product3}>
                <div className={styles.img3}>
                    <img src={product3} alt="book 3"/>

                </div>
            </div>
            <BigArrow className={styles.iconArrow}/>
        </div>

    </div>
}

export default TopSellers