import styles from './Product.module.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import cube from '../../assets/cube.png'
import { Button } from '../Button/Button';

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
    const { productId } = useParams();

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
                <div> quantity</div>
                <div>{data.description}</div>
                <div className={styles.buttons}>
                    <Button name='Achetez' />
                    <Button name='Retirez du panier' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;