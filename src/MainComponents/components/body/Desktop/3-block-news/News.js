import styles from './News.module.css'
import {ReactComponent as BigArrow} from '../../img/arrow2.svg';
import photoNews1 from '../../img/news1.jpg'
import photoNews2 from '../../img/news2.jpg'

function News() {
    return <div className={styles.newsBlock}>
        <div className={styles.title}>
            <p>News</p>
        </div>
        <div className={styles.newsContainer}>
            <div className={styles.news1Container}>
                <div className={styles.infoBlock}>
                    <p className={styles.header}>The Books You Need to Read in 2023</p>
                    <p className={styles.line}></p>
                    <p className={styles.text}>his is the blog we know you've all been waiting for. We present the top
                        10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful
                        storytelling, compelling subject matter and page-turning thrills...</p>
                </div>
                <div className={styles.imgProduct}>
                    <img src={photoNews1} alt="1"/>
                </div>
            </div>
            <div className={styles.news2Container}>
                <div className={styles.infoBlock}>
                    <p className={styles.header}>February's Best Children's Books</p>
                    <p className={styles.line}></p>
                    <p className={styles.text}>Some of the finest children's authors currently writing have books
                        publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet
                        Muncaster. Across all areas and age ranges there are plenty of fantastic titles...</p>
                </div>
                <div className={styles.imgProduct}>
                    <img src={photoNews2} alt="2"/>
                </div>
            </div>
            <BigArrow className={styles.iconArrow}/>
        </div>

    </div>
}

export default News