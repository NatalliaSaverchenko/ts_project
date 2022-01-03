import { WorkList } from './WorkList/WorkList'
import { Button } from '../Button/Button'

import styles from './Work.module.css'

export const Work = () => {
  return (
    <section className={styles.work}>
      <div className={styles.workListContainer}>
        <h2 className={styles.workTitle}>How it works</h2>
        <WorkList />
        <div className={styles.primaryBtn}>
          <Button text={`Learn More`} />
        </div>
      </div>
    </section>
  )
}
