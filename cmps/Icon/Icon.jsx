import styles from '../../styles/Icon.module.css'

const Icon = ({ icon: IconComponent, label }) => {
    return (
        <div className={styles.container}>
            <IconComponent className={styles.icon} />
            <p>{label}</p>
        </div>
    )
}

export default Icon