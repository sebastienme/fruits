import styles from './Welcome.module.css'
import { Button } from '../Button/Button';

const Welcome = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Bienvenue chez fruits.</div>
                <p className={styles.sub_title}>Découvrez notre sélection de sneakers et d'accessoires. Livraison gratuite pour une dépense de 100$ et plus. </p>
                <Button
                    name='Achetez maintenant'
                    to='store'
                />
            </div>
        </>
    )
}

export default Welcome;