import styles from './MobTopSellers.module.css'
import {ReactComponent as Arrow} from "../../img/Arrow.svg";
import prodBook1 from '../../img/productBook1.png'
import {ReactComponent as Cart} from '../../img/Cart.svg'
import {ReactComponent as Fav} from '../../img/Favorite (1).svg';

function MobTopSellers() {
    const isMobile = true;

    return <div className={styles.topSellersContainer}>
        <div className={styles.header}/*{`${styles.header} ${isMobile ? styles.mobile : ''}`}*/>Top Sellers</div>
        <div className={styles.dropdownContainer}>
            <p className={styles.dropdownText}>Choose a genre</p>
            <Arrow/>
        </div>

        <div className={styles.bookContainer}>
            <div className={styles.imgBook}>
                <img src={prodBook1} alt="prodBook"/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.headerInfo}>The Priory of the Orange...</div>
                <div className={styles.textInfo}>The House of Berethnet has ruled Inys for a thousand years. Still
                    unwed, Queen Sabran...
                </div>
                <div className={styles.price}>$ 19.99</div>
                <div className={styles.iconInfo}>
                    <Cart className={styles.iconCart}/>
                    <Fav/>
                </div>
            </div>
        </div>
    </div>
}

export default MobTopSellers