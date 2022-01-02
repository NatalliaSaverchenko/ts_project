import { WildList } from './WildList/WildList'
import { Button } from '../Button/Button'

import styles from './Wild.module.css'

export const Wild = () => {
  return (
    <div className={styles.wildContainer}>
      <h2 className={styles.wildTitle}>In the Wild</h2>
      <p className={styles.wildDescription}>
        In The Wild is a collection of pieces to help close the communication
        gap, while growing the love (and understanding) between you and your
        best pal.
      </p>
      <WildList />
      <div className={styles.primaryBtn}>
        <Button text="View more" />
      </div>
    </div>
  )
}
