import styles from './Welcome.module.css'
import { Button } from '../Button/Button';

const Welcome = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Bienvenue chez fruits.</div>
                <p className={styles.sub_title}>Découvrez notre <span>fake</span> store développé avec fakestore API. 100% du du temps de développement n'a pas été mis dans le design.</p>
                <Button
                    name='Achetez maintenant'
                    to='store'
                />
            </div>
        </>
    )
}

export default Welcome;