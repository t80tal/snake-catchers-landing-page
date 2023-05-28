import styles from '../../styles/Input.module.css'

const Input = ({ placeholder, name }) => {
    return (
        <input className={styles.contactInput} placeholder={placeholder} name={name} />
    )
}

export default Input