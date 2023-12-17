import styles from './BooksArt.module.css'
import books1 from '../img/Books.svg'
import books2 from '../img/Books (1).svg'
import books3 from '../img/Books (2).svg'
import books4 from '../img/Books (3).svg'

function BooksArt() {
    return <div className={styles.booksArtContainer}>
        <img className={styles.booksArt1} src={books1} alt="1"/>
        <img className={styles.booksArt2} src={books2} alt="2"/>
        <img className={styles.booksArt3} src={books3} alt="3"/>
        <img className={styles.booksArt4} src={books4} alt="4"/>
    </div>
}

export default BooksArt