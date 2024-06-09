import styles from './Product.module.css'
import { useParams } from 'react-router-dom';


const Product = () => {
    const { productId } = useParams();



    return (
        <>
        <div className={styles.big}>Product ID: {productId}</div>
        </>
    )
}

export default Product;