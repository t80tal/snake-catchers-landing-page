import styles from '../../styles/Button.module.css'

const Button = ({ children, style }) => {
    return (
        <button style={style} className={styles.gradientButton}>{children}</button>
    )
}

export default Button