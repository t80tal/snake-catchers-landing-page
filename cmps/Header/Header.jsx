import styles from '../../styles/Header.module.css'

const Header = ({ children }) => {
    return (<>
        <header className={styles.header}>
            <div className={styles.wave} />
            {children}
        </header>
    </>)
}

export default Header