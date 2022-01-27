import styles from '../styles/Home.module.css'

export function Paragraph({content}){
return (
    <p className={styles.description}>
        {content}
    </p>
)
}