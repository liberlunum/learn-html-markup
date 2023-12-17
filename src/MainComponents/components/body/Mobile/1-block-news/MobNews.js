import styles from './MobNews.module.css'
import newsImg from '../../img/Photo news.jpg'

function MobNews() {
    return <div className={styles.newsContainer}>
        <div className={styles.textContainer}>
            <div className={styles.headerNews}>The Best Dark Academia Books</div>
            <div className={styles.line}></div>
            <div className={styles.textNews}>Abounding in sinister secrets - sometimes magical, sometimes not - locked
                in the libraries and halls of mysterious educational institutions, dark academia has become a
                phenomenally successful literary genre...
            </div>
        </div>
        <div >
            <img src={newsImg} alt="newsImg"/>
        </div>
    </div>
}

export default MobNews