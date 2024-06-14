import styles from './Product.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import cube from '../../assets/cube.png'
import { Button } from '../Button/Button';
import NumberInput from './ProductComponents.jsx';
import { useCart } from '../../Context.jsx';

const useProduct = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                  }
                return response.json()
            })
            .then((response) => setData(response))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [])

    return {data, error,loading}
}

const Product = () => {
    const { data, error, loading } = useProduct();
    const [quantity, setQuantity] = useState(0);
    const { addItemToCart } = useCart();

    const handleAddToCart = () => {
        addItemToCart({ ...data, quantity }); // Add the item to the cart with the selected quantity
        setQuantity(0); // Reset the quantity input
        console.log('ouiii')
    };

    useEffect(() => {
        console.log(quantity)
    }, [quantity]);

    useEffect(() => {
        if (data) {
          console.log(data);
        }
    }, [data]);

    if (loading) return <p>Ça load...</p>;
    if (error) return <p>Une erreur réseau a été rencontrée</p>;


    return (
        <>
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={data.image} />
            </div>
            <div className={styles.details}>
                <div className={styles.title}>{data.title}</div>
                <div>{data.category}</div>
                <div className={styles.stocks}>
                    <img src={cube} className={styles.cube}/>
                    Disponible
                </div>
                <div className={styles.price}>{data.price}$</div>
                <NumberInput
                    value={quantity}
                    min={0}
                    onChange={(event, newValue) => setQuantity(newValue)}
                />
                <div>{data.description}</div>
                <div className={styles.buttons}>
                    <Button name='Achetez' onClick={handleAddToCart} />
                    <Button name='Retirez du panier' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;