import styles from './Button.module.css'
import { Link } from "react-router-dom";

const Button = (props) => {
    return (
        <>
            <Link to={props.to} className={styles.btn}>{props.name}</Link>
        </>
    )
}

export {Button} 