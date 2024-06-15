import styles from './ShoppingCart.module.css';
import cube from '../../assets/cube.png'
import { useCart } from '../../Context.jsx';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {
    const { cart } = useCart();
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        const calculateTotalCost = () => {
            const total = cart.reduce((acc, item) => acc += item.quantity * item.price, 0);
            setTotalCost(total);
        };

        calculateTotalCost();
    }, [cart]);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.products}>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.product_item}>
                            <img src={item.image} alt="" />
                            <div className={styles.details}>
                                <div className={styles.title}>{item.title}</div>
                                <div className={styles.category}>{item.category}</div>
                                <div className={styles.stocks}>
                                    <img src={cube} className={styles.cube}/>
                                    Disponible
                                </div>
                                <div className={styles.qty}>Quantité: {item.quantity}</div>
                                <div className={styles.cost}>{item.price}$</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.summary}>
                    <div className={styles.order_title}>Sommaire</div>
                    <Divider />
                    <div className={styles.total}>Total : {totalCost}$</div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart;