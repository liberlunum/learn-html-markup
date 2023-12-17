import styles from './Socialmedia.module.css'
import {ReactComponent as LogoIg1} from '../img/_Instagram.svg'
import {ReactComponent as LogoIg2} from "../img/_Instagram (1).svg";
import {ReactComponent as LogoFb} from "../img/_Facebook.svg";
import {ReactComponent as LogoGoogle} from "../img/_Google.svg";

function SocialMedia() {
    return <div>
        <LogoIg1 className={styles.logo}/>
        <LogoGoogle className={styles.logo}/>
        <LogoFb />

    </div>
}

export default SocialMedia