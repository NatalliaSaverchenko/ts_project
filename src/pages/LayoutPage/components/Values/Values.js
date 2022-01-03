import { CardList } from './CardList/CardList'
import dog from './images/dog.png'

import styles from './Values.module.css'

export const Values = () => {
  return (
    <section className={styles.value}>
      <div className={styles.values}>
        <div className={styles.valuesPhotoContent}>
          <h2 className={styles.valuesTitle}>
            We couldn’t find a pharmacy experience worthy of our best buds - so
            we created one.
          </h2>
          <div className={styles.valuesImage}>
            <img src={dog} alt="dog" />
          </div>
        </div>

        <CardList />
      </div>
    </section>
  )
}
