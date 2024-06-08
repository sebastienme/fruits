import bag from '../../assets/bag.svg'
import heart from '../../assets/heart.svg'
import search from '../../assets/search.svg'
import styles from './Icons.module.css'

const Bag = () => {
    return (
        <>
            <img src={bag} className={styles.icons} alt="bag-icon" />
        </>
    )
}

const Heart = () => {
    return (
        <>
            <img src={heart} className={styles.icons} alt="heart-icon" />
        </>
    )
}

const Search = () => {
    return (
        <>
            <img src={search} className={`${styles.icons} ${styles.search}`} alt="heart-icon" />
        </>
    )
}

export {Heart, Bag, Search};