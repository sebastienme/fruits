import styles from './Navbar.module.css'
import { Bag, Heart, Search } from '../Icons/Icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context.jsx';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { cart } = useCart();
    const [cartQty, setCartQty] = useState(0);

    useEffect(() => {
        setCartQty(cart.length)
    }, [cart])

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting
    };

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navleft}>
                    <div className={styles.brand}>fruits.</div>
                    <ul className={styles.navbarList}>
                        <li><Link to="/">Acceuil</Link></li>
                        <li><Link to="store">Magasin</Link></li>
                    </ul>
                </div>
                <div className={styles.navright}>
                    <div className={styles.searchbar}>
                        <Search />
                        <form onSubmit={handleSubmit}>
                            <input className={styles.input} type="text" placeholder='Recherche' />
                            <input className={styles.none} type="submit"></input>
                        </form>
                    </div>
                    <ul className={styles.icons}>
                        <li><Link to="cart"><Bag qty={cartQty} /></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;