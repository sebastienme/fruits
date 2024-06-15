import bag from '../../assets/bag.svg'
import heart from '../../assets/heart.svg'
import search from '../../assets/search.svg'
import styles from './Icons.module.css'

const Bag = (props) => {
    return (
        <>
            <div className={styles.flex_container}>
                <img src={bag} className={styles.icons} alt="bag-icon" />
                <span className={styles.cart_qty}>{props.qty}</span>
            </div>
        </>
    )
}

const Heart = ({ className }) => {
    return (
        <>
            <img src={heart} className={`${styles.icons} ${className}`} alt="heart-icon" />
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