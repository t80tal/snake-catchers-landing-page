import styles from '../../styles/Main.module.css'

const Main = ({ children }) => {
    return (
        <main className={styles.mainContent}>
            {children}
        </main>
    )
}

export default Main