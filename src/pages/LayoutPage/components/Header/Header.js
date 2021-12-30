import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'
import { Button } from '../Button/Button'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navigation />
        <Logo />
        <Button text={`Try mixlab`} />
      </header>
    </div>
  )
}
