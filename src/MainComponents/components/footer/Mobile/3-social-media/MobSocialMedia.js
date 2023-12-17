import styles from './MobSocialMedia.module.css'
import {ReactComponent as IconIg} from "../img/_Instagram (2).svg";
import {ReactComponent as IconGoogle} from "../img/_Google (1).svg";
import {ReactComponent as IconFb} from "../img/_Facebook (1).svg";

function MobSocialMedia() {
    return <div className={styles.iconContainer}>
        <IconIg/>
        <IconGoogle/>
        <IconFb/>
    </div>
}

export default MobSocialMedia