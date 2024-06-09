import { useEffect, useState } from "react";
import Card from '../Cards/Cards'
import styles from './Store.module.css'
import { shuffle } from 'fast-shuffle'
import { Link } from 'react-router-dom';

const useProducts = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
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

const Store = () => {
    const { data, error, loading } = useProducts();

    useEffect(() => {
        if (data) {
          console.log(data);
        }
    }, [data]);
    
    if (loading) return <p>Ça load...</p>;
    if (error) return <p>Une erreur réseau a été rencontrée</p>;

    const itemCount = data ? data.length : 0;
    
    return (
        <>
            <div className={styles.store_title}>Produits<span>({itemCount})</span></div>
            <div className={styles.products}>
            {shuffle(data.map((item) => (
                <Link to={`${item.id}`} key={item.id}>
                    <Card
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        category={item.category}
                        price={item.price}
                    />
                </Link>
            )))}   
            </div>
            
        </>
    )
}

export default Store