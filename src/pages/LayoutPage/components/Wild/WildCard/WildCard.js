import styles from './WildCard.module.css'
export const WildCard = ({ image, data, title, description, link }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={styles.wildCardText}>
        <span>{data}</span>
        <h5 className={styles.wildCardTextTitle}>{title}</h5>
        <p className={styles.wildCardTextDescription}>{description}</p>
        <a href>{link}</a>
      </div>
    </div>
  )
}
