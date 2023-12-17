import styles from './MobRecs.module.css'
import prodBook1 from "../../img/productBook1.png";
import {ReactComponent as Cart} from '../../img/Cart.svg'
import {ReactComponent as Fav} from '../../img/Favorite (1).svg';
import prodBook2 from '../../img/ProduuctBook2.png'

function MobRecs() {
    return <div className={styles.recsContainer}>
        <div className={styles.header}/*{`${styles.header} ${isMobile ? styles.mobile : ''}`}*/>Recommended for you</div>

        <div className={styles.bookContainer}>
            <div className={styles.imgBook}>
                <img src={prodBook2} alt="prodBook"/>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.headerInfo}>Under the Skin: The Hidden..</div>
                <div className={styles.textInfo}>Under the Skin, Linda Villarosa lays bare the forces in the American
                    health-care system...
                </div>
                <div className={styles.price}>$ 27.99</div>
                <div className={styles.iconInfo}>
                    <Cart className={styles.iconCart}/>
                    <Fav/>
                </div>
            </div>
        </div>
    </div>
}

export default MobRecs