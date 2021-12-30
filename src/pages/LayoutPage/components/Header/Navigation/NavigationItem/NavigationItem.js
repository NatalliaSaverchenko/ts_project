import styles from './NavigationItem.module.css'
export const NavigationItem = ({ navItemTitle }) => {
  return (
    <>
      <a href="/" className={styles.navigationItem}>
        {navItemTitle}
      </a>
    </>
  )
}
