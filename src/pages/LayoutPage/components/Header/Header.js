import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'
import { Button } from '../Button/Button'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Navigation />
        <Logo />
        <div className={styles.pannel}>
          <div className={styles.btn_main + ' ' + styles.btn_usual}>
            <Button text={`Veterinarian login`} />
          </div>
          <div className={styles.btn_main}>
            <Button text={`Try mixlab`} />
          </div>
        </div>
      </div>
    </header>
  )
}
