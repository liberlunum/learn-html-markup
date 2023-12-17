import styles from './MobNavBar.module.css'
import {ReactComponent as IconMenu} from '../../img/Menu.svg'
import {ReactComponent as IconBasket} from '../../img/Cart icon.svg'
import {ReactComponent as IconSearch} from '../../img/SearchIcon.svg'

function MobNavBar() {
    return <div className={styles.navBarContainer}>
        <div>
            <IconMenu/>
        </div>
        <div className={styles.imitationInput}>
            <IconSearch className={styles.iconSearch}/>
            <p className={styles.imitationInputText}>What are you looking for?</p>
        </div>
        <div>
            <IconBasket/>
        </div>
    </div>
}

export default MobNavBar