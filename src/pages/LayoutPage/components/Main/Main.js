import { Button } from '../Button/Button'
import skate from './images/skate.png'
import styles from './Main.module.css'

export const Main = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The pet pharmacy humans are jealous of.</h1>
      <h3 className={styles.subtitle}>
        5 stars on
        <span className={(styles.subtitle, styles.color)}>
          {` Yelp, Google and Facebook `}
        </span>
        because your best friend deserves only the best in pet care.
      </h3>
      <div className={styles.primaryBtn}>
        <Button text={`Try Mixlab`} />
      </div>
      <div className={styles.imgContainer}>
        <img src={skate} alt="rabbit" />
      </div>
    </div>
  )
}
