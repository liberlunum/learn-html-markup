import styles from './NavBar.module.css'
import {ReactComponent as IconMenu} from '../../img/Menu.svg'
import {ReactComponent as IconAccount} from '../../img/Account.svg'
import {ReactComponent as IconFavorite} from '../../img/Favorite.svg'
import {ReactComponent as IconBasket} from '../../img/Bascet.svg'
import {ReactComponent as IconSearch} from '../../img/SearchIcon.svg'


function NavBar() {
    return <div className={styles.navBarContainer}>
        <div className={styles.leftPartNavBar}>
            <div className={styles.menuIcon}>
                <IconMenu/>
            </div>
            <div className={styles.imitationInput}>
                <IconSearch className={styles.iconSearch}/>
                <p className={styles.imitationInputText}>What are you looking for?</p>
            </div>
        </div>

        <div className={styles.rightPartNavBar}>
            <div className={styles.iconAccount}>
                <IconAccount/>
            </div>
            <div className={styles.iconFav}>
                <IconFavorite/>
            </div>
            <div className={styles.basketContainer}>
                <IconBasket className={styles.iconBasket}/>
                <p className={styles.basketText}>Basket</p>
            </div>
        </div>

    </div>
}

export default NavBar