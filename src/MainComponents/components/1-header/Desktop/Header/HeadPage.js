import styles from './HeadPage.module.css'
import book1 from '../../img/Books1.jpg'
import book2 from '../../img/Books2.jpg'
import book3 from '../../img/Books3.jpg'

function HeadPage() {
    return <div className={styles.headerContainer}>
        <div className={styles.newReleaseContainer}>
            <h1 className={styles.headerText}>New Releases This Week</h1>
            <p className={styles.headerParagraph}>It's time to update your reading list with some of the latest and
                greatest releases in the literary world.
                From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for
                everyone</p>
            <p className={styles.headerButton}>Subscribe</p>
        </div>
        <div className={styles.showBooksContainer}>
            <img className={styles.imgBook1} src={book1} alt='dd'/>
            <img className={styles.imgBook2} src={book2} alt="dd"/>
            <img className={styles.imgBook3} src={book3} alt="dd"/>
        </div>

    </div>
}

export default HeadPage