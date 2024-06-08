import styles from './Button.module.css'

const Button = (props) => {
    return (
        <>
            <a href={props.href} className={styles.btn}>{props.name}</a>
        </>
    )
}

export {Button} 