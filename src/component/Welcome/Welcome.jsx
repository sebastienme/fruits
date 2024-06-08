import styles from './Welcome.module.css'
import { Button } from '../Button/Button';

const Welcome = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Bienvenue chez fruits.</div>
                <p className={styles.sub_title}>Découvrez notre sélection de fruits frais, riches en saveurs et en vitalité. Livré directement de la ferme à votre table.</p>
                <Button
                    name='Achetez maintenant'
                />
            </div>
        </>
    )
}

export default Welcome;