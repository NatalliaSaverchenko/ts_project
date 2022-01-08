import { NavigationItem } from './NavigationItem/NavigationItem'

import styles from './Navigation.module.css'

export const Navigation = () => {
  const navigationList = ['Veterinarians', 'How it works', 'About us', 'Shop']
  return (
    <nav>
      <ul className={styles.navigation}>
        {navigationList &&
          navigationList.map((navItem, index) => (
            <li key={index} className={styles.navigationItem}>
              <NavigationItem navItemTitle={navItem} />
            </li>
          ))}
      </ul>
    </nav>
  )
}
