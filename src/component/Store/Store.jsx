import { useEffect, useState } from "react";
import Card from '../Cards/Cards'
import styles from './Store.module.css'
import { shuffle } from 'fast-shuffle'
import { Link } from 'react-router-dom';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const useProducts = () => {
    const [data, setData] = useState(null);
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);
    const [errorCat, setErrorCat] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingCat, setLoadingCat] = useState(true);


    /* TODO: faire un useEffect avec les filtres qui vient chercher les produits
             de la categorie clique dans les filtres. 
    */ 


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

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                  }
                return response.json()
            })
            .then((response) => setCategories(response))
            .catch((error) => setErrorCat(error))
            .finally(() => setLoadingCat(false));
    }, [])


    return {data, error,loading, categories, errorCat, loadingCat}
}

const Store = () => {
    const { data, error,loading, categories, errorCat, loadingCat } = useProducts();
    const [filteredData, setFilteredData] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (data) {
            setFilteredData(data);
        }
    }, [data]);

    
    useEffect(() => {
        if (selectedCategories.length > 0) {
            const newData = data.filter((item) => selectedCategories.includes(item.category));
            setFilteredData(newData)
        } else {
            setFilteredData(data);
        }

    }, [selectedCategories, data])

    const handleCategoryChange = (category) => {
        setSelectedCategories((prevCategories) => {
            if (prevCategories.includes(category)) {
                return prevCategories.filter((cat) => cat !== category);
            } else {
                return [...prevCategories, category];
            }
        });
    };

    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
        console.log('add to cart dans le store')
    } 

    if (loading) return <p>Ça load...</p>;
    if (error) return <p>Une erreur réseau a été rencontrée</p>;

    if (loadingCat) return <p>Les filtres load...</p>;
    if (errorCat) return <p>Une erreur réseau a été rencontrée</p>;
    
    const itemCount = filteredData ? filteredData.length : 0;

    return (
        <>
        <div className={styles.flex_container}>
            <div className={styles.filtre_container}>
                <div className={styles.filter_title}>Filtre</div>
                <div className={styles.filter_items}>
                    <FormGroup>
                        {categories && categories.map((item) => (
                            <a key={item}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label={item}
                                    checked={selectedCategories.includes(item)}
                                    onChange={() => handleCategoryChange(item)}
                                />
                            </a>
                        ))}
                    </FormGroup>
                </div>
            </div>
            <div className={styles.right_container}>
                <div className={styles.store_title}>Produits <span>({itemCount})</span></div>
                <div className={styles.products}>
                    {filteredData && shuffle(filteredData.map((item) => (
                        <Link to={`${item.id}`} key={item.id}>
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                category={item.category}
                                price={item.price}
                                addToCart={() => addToCart(item)}
                            />
                        </Link>
                    )))}   
                </div>
            </div>
        </div>

        </>
    )
}

export default Store