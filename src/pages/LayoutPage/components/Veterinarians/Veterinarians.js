import { Button } from '../Button/Button'
import photo from './images/photo.png'

import styles from './Veterinarians.module.css'

export const Veterinaians = () => {
  return (
    <section className={styles.veterinaians}>
      <div className={styles.veterinaiansContainer}>
        <div>
          <img src={photo} alt="" />
        </div>
        <div className={styles.veterinaiansTextCard}>
          <h4 className={styles.veterinaiansTextCardPreTitle}>
            For Veterinarians
          </h4>
          <h2 className={styles.veterinaiansTextCardTitle}>
            We're here to support you and your practice
          </h2>
          <p className={styles.veterinaiansTextCardDescription}>
            Mixlab offers a simple, fast, reliable (and fun) home delivery
            pharmacy service for your clients. No more delays, no more
            miscommunications, no more grumpy pets. It’s time to partner with a
            pharmacy that cares about customer experience as much as you do.
          </p>
          <Button text={`Learn More`} />
        </div>
      </div>
    </section>
  )
}
