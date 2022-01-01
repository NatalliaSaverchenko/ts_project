import styles from './TextCard.module.css'
export const TextCard = ({ textCardTitle, textCardDescription }) => {
  return (
    <div className={styles.textCard}>
      <h5 className={styles.textCardTitle}>{textCardTitle}</h5>
      <p className={styles.textCardDescription}>{textCardDescription}</p>
    </div>
  )
}
