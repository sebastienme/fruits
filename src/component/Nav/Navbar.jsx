import styles from './Navbar.module.css'
import { Bag, Heart, Search } from '../Icons/Icons';

const Navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navleft}>
                    <div className={styles.brand}>fruits.</div>
                    <ul className={styles.navbarList}>
                        <li><a href=''>Acceuil</a></li>
                        <li><a href=''>Magasin</a></li>
                    </ul>
                </div>
                <div className={styles.navright}>
                    <div className={styles.searchbar}>
                        <Search />
                        <form>
                            <input className={styles.input} type="text" placeholder='Recherche' />
                            <input className={styles.none} type="submit"></input>
                        </form>
                    </div>
                    <ul className={styles.icons}>
                        <li><Bag /></li>
                        <li><Heart /></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;