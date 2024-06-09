import styles from './Cards.module.css'
import { Bag, Heart } from '../Icons/Icons';

const Card = (props) => {
    return (
        <>
            <div className={styles.card}>
                <Heart className={styles.favorite}/>
                <img src={props.image} className={styles.product_image} />
                <div className={styles.details}>
                    <div className='details_left'>
                        <ul>
                            <li className={styles.brand}>{props.title}</li>
                            <li className={styles.description}>{props.category}</li>
                            <li className={styles.price}>{props.price}$</li>
                        </ul>
                    </div>
                    <div className={styles.details_right}>
                        <Bag />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card