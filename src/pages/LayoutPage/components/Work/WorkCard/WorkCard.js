import styles from './WorkCard.module.css'

export const WorkCard = ({ title, description, image }) => {
  return (
    <div className={styles.workCard}>
      <div className={styles.imageWorkCardContainer}>
        <img src={image} alt="" />
      </div>
      <h3 className={styles.workCardTitle}>{title}</h3>
      <p className={styles.workCardDescription}>{description}</p>
    </div>
  )
}
